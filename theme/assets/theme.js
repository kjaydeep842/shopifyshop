/* 
  VALERIA & CO. - Global Theme JavaScript
*/

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initAnnouncementBar();
  initMobileDrawer();
  initToast();
});

function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });
}

function initAnnouncementBar() {
  const bar = document.querySelector('.announcement-bar');
  const closeBtn = document.querySelector('.announcement-bar__close');
  if (!bar || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    bar.style.display = 'none';
    document.documentElement.style.setProperty('--announcement-height', '0px');
  });
}

function initMobileDrawer() {
  const menuToggle = document.querySelector('[data-action="toggle-mobile-menu"]');
  const drawer = document.querySelector('.mobile-menu-drawer');
  const backdrop = document.querySelector('.mobile-menu-backdrop');

  if (!menuToggle || !drawer) return;

  const toggle = () => {
    drawer.classList.toggle('is-active');
    if (backdrop) backdrop.classList.toggle('is-active');
    document.body.style.overflow = drawer.classList.contains('is-active') ? 'hidden' : '';
  };

  menuToggle.addEventListener('click', toggle);
  if (backdrop) backdrop.addEventListener('click', toggle);
}

function initToast() {
  window.showToast = function(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = 'background:#0F0F10;color:#fff;padding:12px 20px;border-radius:6px;font-size:0.85rem;box-shadow:0 4px 12px rgba(0,0,0,0.15);display:flex;align-items:center;gap:10px;animation:fadeIn 0.3s ease;';
    toast.innerHTML = `<span>${message}</span>`;
    
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };
}
