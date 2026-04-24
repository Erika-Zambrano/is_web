/**
 * ez-tag — Etiqueta / pill (ej. "Bienvenido", "Nuevo").
 * Contenido: texto dentro del componente.
 */
class EzTag extends HTMLElement {
  connectedCallback() {
    const text = this.textContent.trim() || 'Tag';
    const span = document.createElement('span');
    span.className = 'ez-tag';
    span.textContent = text;
    this.replaceChildren(span);
  }
}

customElements.define('ez-tag', EzTag);
