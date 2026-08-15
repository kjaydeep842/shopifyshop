/* 
  VALERIA & CO. - Wishlist Manager Engine
*/

class WishlistManager {
  constructor() {
    this.STORAGE_KEY = 'valeria_wishlist_items';
    this.items = this.load();
    this.init();
  }

  init() {
    this.updateBadges();
    this.bindEvents();
    this.syncCardStates();
    this.renderWishlistPage();
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  save() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
    this.updateBadges();
    this.syncCardStates();
    this.renderWishlistPage();
  }

  toggle(product) {
    const index = this.items.findIndex(i => i.id === product.id || i.title === product.title);
    if (index > -1) {
      this.items.splice(index, 1);
      if (window.showToast) window.showToast('Removed from Wishlist', 'info');
    } else {
      this.items.push(product);
      if (window.showToast) window.showToast('Added to Wishlist!', 'success');
    }
    this.save();
  }

  has(id, title) {
    return this.items.some(i => i.id === id || i.title === title);
  }

  updateBadges() {
    const badges = document.querySelectorAll('.wishlist-count-badge');
    badges.forEach(b => b.textContent = this.items.length);
  }

  syncCardStates() {
    const btns = document.querySelectorAll('[data-wishlist-toggle]');
    btns.forEach(btn => {
      const id = btn.dataset.productId;
      const title = btn.dataset.productTitle;
      if (this.has(id, title)) {
        btn.classList.add('is-active');
        btn.style.backgroundColor = '#0F0F10';
        btn.style.color = '#FFFFFF';
      } else {
        btn.classList.remove('is-active');
        btn.style.backgroundColor = 'rgba(255,255,255,0.9)';
        btn.style.color = '#0F0F10';
      }
    });
  }

  renderWishlistPage() {
    const container = document.querySelector('[data-wishlist-container]') || document.getElementById('WishlistGrid');
    if (!container) return;

    if (this.items.length === 0) {
      container.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:60px 0;">
          <p style="color:var(--color-text-muted);font-size:1.1rem;margin-bottom:24px;">Your wishlist is currently empty.</p>
          <a href="/collections/all" class="btn btn-primary">EXPLORE LUXURY COLLECTION</a>
        </div>
      `;
    } else {
      container.innerHTML = this.items.map(item => `
        <div class="product-card">
          <div class="product-card__media">
            <button type="button" class="product-card__wishlist is-active" onclick="window.wishlist.toggle({id:'${item.id}',title:'${item.title}'})" style="background:#0F0F10;color:#fff;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
            <img src="${item.image}" class="product-card__img" alt="${item.title}" />
          </div>
          <div class="product-card__content">
            <div class="product-card__title">${item.title}</div>
            <div style="font-weight:600;color:var(--color-accent);margin-bottom:12px;">${item.price}</div>
            <form method="post" action="/cart/add" data-product-title="${item.title}" data-product-price="${item.price}" data-product-image="${item.image}">
              <button type="submit" class="btn btn-primary btn-full" style="padding:10px 16px;font-size:0.75rem;">ADD TO CART</button>
            </form>
          </div>
        </div>
      `).join('');
    }
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-wishlist-toggle]');
      if (btn) {
        e.preventDefault();
        const pData = {
          id: btn.dataset.productId || Date.now(),
          title: btn.dataset.productTitle || 'Valeria Item',
          price: btn.dataset.productPrice || '₹2,999.00',
          image: btn.dataset.productImage || 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80'
        };
        this.toggle(pData);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.wishlist = new WishlistManager();
});
