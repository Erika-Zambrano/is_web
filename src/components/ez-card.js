/**
 * ez-card — Tarjeta con opcional label y contenido en slot.
 * @attr label texto del label (opcional)
 * @attr interactive si está presente, hover con borde accent y lift
 */
class EzCard extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute('label');
    const interactive = this.hasAttribute('interactive');

    const card = document.createElement('div');
    card.className = 'ez-card';

    // Accesibilidad: si es interactiva, hacerla focusable
    if (interactive) {
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'article');
    }

    if (label) {
      const labelEl = document.createElement('span');
      labelEl.className = 'ez-card-label';
      labelEl.textContent = label;
      card.appendChild(labelEl);
    }

    const body = document.createElement('div');
    body.className = 'ez-card-body';
    Array.from(this.childNodes).forEach(node => body.appendChild(node));
    this.replaceChildren(card);
    card.appendChild(body);
  }
}

customElements.define('ez-card', EzCard);
