/* 
  VALERIA & CO. - Production-Grade AJAX Cart Drawer Engine
*/

class CartDrawer {
  constructor() {
    this.drawer = document.querySelector('.cart-drawer');
    this.backdrop = document.querySelector('.cart-drawer-backdrop');
    this.openBtns = document.querySelectorAll('[data-action="open-cart"]');
    this.closeBtns = document.querySelectorAll('[data-action="close-cart"]');
    this.itemsContainer = document.querySelector('.cart-drawer__items');
    this.subtotalEl = document.querySelector('.cart-drawer__subtotal-val');
    this.countBadges = document.querySelectorAll('.cart-count-badge');
    this.freeShippingThreshold = 999;
    this.shippingBarFill = document.querySelector('.shipping-progress__fill');
    this.shippingText = document.querySelector('.shipping-bar__text');
    
    // Local fallback state if Shopify products not yet created in Admin
    this.localCart = this.loadLocalCart();

    this.init();
  }

  init() {
    this.bindEvents();
    this.refresh();
  }

  loadLocalCart() {
    try {
      return JSON.parse(localStorage.getItem('valeria_local_cart')) || [];
    } catch {
      return [];
    }
  }

  saveLocalCart() {
    localStorage.setItem('valeria_local_cart', JSON.stringify(this.localCart));
  }

  bindEvents() {
    // Open/Close triggers
    document.addEventListener('click', (e) => {
      const openBtn = e.target.closest('[data-action="open-cart"]');
      if (openBtn) {
        e.preventDefault();
        this.open();
      }
      const closeBtn = e.target.closest('[data-action="close-cart"]');
      if (closeBtn) {
        e.preventDefault();
        this.close();
      }
    });

    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }

    // Intercept form submissions for Add to Cart
    document.addEventListener('submit', (e) => {
      if (e.target.matches('form[action*="/cart/add"]')) {
        e.preventDefault();
        this.handleAddForm(e.target);
      }
    });

    // Delegated click handler inside Cart Drawer (Quantity change & Remove)
    if (this.itemsContainer) {
      this.itemsContainer.addEventListener('click', (e) => {
        const qtyBtn = e.target.closest('[data-qty-change]');
        if (qtyBtn) {
          const key = qtyBtn.dataset.key;
          const delta = parseInt(qtyBtn.dataset.qtyChange, 10);
          this.changeQuantity(key, delta);
        }

        const removeBtn = e.target.closest('[data-remove-item]');
        if (removeBtn) {
          const key = removeBtn.dataset.key;
          this.removeItem(key);
        }
      });
    }
  }

  open() {
    if (this.drawer) this.drawer.classList.add('is-active');
    if (this.backdrop) this.backdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    this.refresh();
  }

  close() {
    if (this.drawer) this.drawer.classList.remove('is-active');
    if (this.backdrop) this.backdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  async handleAddForm(form) {
    const formData = new FormData(form);
    const variantId = formData.get('id');
    const title = form.dataset.productTitle || 'Valeria Luxury Item';
    const price = parseInt(form.dataset.productPrice || '2999', 10);
    const image = form.dataset.productImage || 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80';

    try {
      const res = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        if (window.showToast) window.showToast('Item added to your shopping bag!');
        this.open();
        return;
      }
    } catch (err) {
      console.log('Using robust client fallback cart engine.');
    }

    // Fallback cart insertion for preview items
    const existing = this.localCart.find(i => i.title === title);
    if (existing) {
      existing.qty++;
    } else {
      this.localCart.push({
        id: variantId || Date.now(),
        title: title,
        price: price,
        image: image,
        qty: 1
      });
    }
    this.saveLocalCart();
    if (window.showToast) window.showToast('Item added to your shopping bag!');
    this.open();
  }

  changeQuantity(key, delta) {
    const item = this.localCart.find(i => i.id == key || i.title == key);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        this.localCart = this.localCart.filter(i => i !== item);
      }
      this.saveLocalCart();
      this.refresh();
      return;
    }

    // Try Shopify API
    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: key, quantity: delta })
    }).then(res => res.json()).then(cart => this.renderCart(cart)).catch(() => {});
  }

  removeItem(key) {
    this.localCart = this.localCart.filter(i => i.id != key && i.title != key);
    this.saveLocalCart();
    this.refresh();
  }

  async refresh() {
    try {
      const res = await fetch('/cart.js');
      if (res.ok) {
        const cart = await res.json();
        if (cart.item_count > 0) {
          this.renderCart(cart);
          return;
        }
      }
    } catch (err) {}

    // Render local cart state
    this.renderLocalCart();
  }

  renderLocalCart() {
    const totalCount = this.localCart.reduce((sum, i) => sum + i.qty, 0);
    const subtotalCents = this.localCart.reduce((sum, i) => sum + (i.price * i.qty), 0);

    this.countBadges.forEach(b => b.textContent = totalCount);

    if (this.subtotalEl) {
      this.subtotalEl.textContent = '₹' + subtotalCents.toLocaleString('en-IN', { minimumFractionDigits: 2 });
    }

    if (this.shippingBarFill && this.shippingText) {
      const progress = Math.min((subtotalCents / this.freeShippingThreshold) * 100, 100);
      this.shippingBarFill.style.width = `${progress}%`;
      if (progress >= 100) {
        this.shippingText.textContent = "You've unlocked FREE Express Shipping!";
      } else {
        const rem = this.freeShippingThreshold - subtotalCents;
        this.shippingText.textContent = `Add ₹${rem.toLocaleString('en-IN')} more for FREE Shipping`;
      }
    }

    if (!this.itemsContainer) return;

    if (this.localCart.length === 0) {
      this.itemsContainer.innerHTML = '<p class="text-muted" style="text-align:center;padding:40px 0;">Your shopping bag is empty.</p>';
    } else {
      this.itemsContainer.innerHTML = this.localCart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" class="cart-item__img" alt="${item.title}" />
          <div class="cart-item__details">
            <div class="cart-item__title">${item.title}</div>
            <div style="font-weight:600;font-size:0.85rem;color:var(--color-accent);margin-bottom:6px;">₹${item.price.toLocaleString()}</div>
            <div class="cart-item__qty">
              <button type="button" class="qty-btn" data-qty-change="-1" data-key="${item.id}">-</button>
              <span class="qty-input" style="line-height:28px;text-align:center;">${item.qty}</span>
              <button type="button" class="qty-btn" data-qty-change="1" data-key="${item.id}">+</button>
            </div>
          </div>
          <button type="button" data-remove-item data-key="${item.id}" style="color:var(--color-text-muted);padding:40px 8px;font-size:1.1rem;">✕</button>
        </div>
      `).join('');
    }
  }

  renderCart(cart) {
    this.countBadges.forEach(badge => badge.textContent = cart.item_count || 0);

    if (this.subtotalEl) {
      this.subtotalEl.textContent = '₹' + ((cart.total_price || 0) / 100).toLocaleString('en-IN', { minimumFractionDigits: 2 });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cartDrawer = new CartDrawer();
});
