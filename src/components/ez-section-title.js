/**
 * ez-section-title — Título de sección (h2 con estilo del design system).
 */
class EzSectionTitle extends HTMLElement {
  connectedCallback() {
    const text = this.textContent.trim() || '';
    const h2 = document.createElement('h2');
    h2.className = 'ez-section-title';
    h2.textContent = text;
    this.replaceChildren(h2);
  }
}

customElements.define('ez-section-title', EzSectionTitle);
