/* 
  VALERIA & CO. - Predictive Search Overlay
*/

class PredictiveSearch {
  constructor() {
    this.modal = document.querySelector('.search-modal');
    this.openBtns = document.querySelectorAll('[data-action="open-search"]');
    this.closeBtns = document.querySelectorAll('[data-action="close-search"]');
    this.input = document.querySelector('.search-input');
    this.resultsContainer = document.querySelector('.search-results');
    this.debounceTimer = null;

    this.init();
  }

  init() {
    this.openBtns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.open();
    }));
    this.closeBtns.forEach(btn => btn.addEventListener('click', () => this.close()));
    
    if (this.input) {
      this.input.addEventListener('input', () => {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => this.search(), 300);
      });
    }
  }

  open() {
    if (this.modal) this.modal.classList.add('is-active');
    if (this.input) this.input.focus();
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (this.modal) this.modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  async search() {
    const query = this.input.value.trim();
    if (query.length < 2) {
      if (this.resultsContainer) this.resultsContainer.innerHTML = '<p class="text-muted">Type at least 2 characters to search...</p>';
      return;
    }

    try {
      const res = await fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product,collection,article&resources[limit]=6`);
      const data = await res.json();
      this.renderResults(data.resources.results);
    } catch (err) {
      console.warn('Predictive search fallback:', err);
    }
  }

  renderResults(results) {
    if (!this.resultsContainer) return;
    const products = results.products || [];
    if (products.length === 0) {
      this.resultsContainer.innerHTML = '<p>No items found.</p>';
      return;
    }

    let html = '<div class="search-results-grid" style="display:grid;gap:12px;">';
    products.forEach(p => {
      html += `
        <a href="${p.url}" class="search-result-item" style="display:flex;align-items:center;gap:12px;padding:8px;border-bottom:1px solid #eee;">
          <img src="${p.image}" style="width:48px;height:48px;object-fit:cover;border-radius:4px;" />
          <div>
            <div style="font-weight:600;font-size:0.9rem;">${p.title}</div>
            <div style="color:#C5A880;font-size:0.85rem;">₹${(p.price / 100).toFixed(2)}</div>
          </div>
        </a>
      `;
    });
    html += '</div>';
    this.resultsContainer.innerHTML = html;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.predictiveSearch = new PredictiveSearch();
});
