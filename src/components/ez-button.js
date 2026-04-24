/**
 * ez-button — Botón reutilizable como enlace o botón nativo.
 * @attr variant "primary" | "ghost" (default: primary)
 * @attr size "normal" | "large" (default: normal)
 * @attr href si está definido, se renderiza como <a>
 */
class EzButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'size', 'href'];
  }

  connectedCallback() {
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'normal';
    const href = this.getAttribute('href');
    const label = this.textContent.trim() || 'Button';

    this.setAttribute('variant', variant);
    this.setAttribute('size', size);

    const isLink = href != null && href !== '';

    const el = isLink
      ? document.createElement('a')
      : document.createElement('button');

    el.className = 'ez-btn';
    el.textContent = label;

    if (isLink) {
      el.href = href;
      if (this.getAttribute('target')) el.target = this.getAttribute('target');
      // Accesibilidad: transferir aria-label si existe
      if (this.getAttribute('aria-label')) {
        el.setAttribute('aria-label', this.getAttribute('aria-label'));
      }
    } else {
      el.type = this.getAttribute('type') || 'button';
      // Accesibilidad: transferir aria-label si existe
      if (this.getAttribute('aria-label')) {
        el.setAttribute('aria-label', this.getAttribute('aria-label'));
      }
    }

    // Mantener tabulación nativa
    el.tabIndex = 0;

    this.replaceChildren(el);
  }
}

customElements.define('ez-button', EzButton);
