if (window.self !== window.top) {
  const notes = {};

  window.addEventListener('message', ({ data }) => {
    if (!data?.type) return;

    if (data.type === 'SET_TOKEN') {
      document.documentElement.style.setProperty(data.token, data.value);
    }

    if (data.type === 'SET_ALL_TOKENS') {
      Object.entries(data.tokens).forEach(([t, v]) =>
        document.documentElement.style.setProperty(t, v)
      );
    }

    if (data.type === 'SHOW_NOTES') {
      Object.assign(notes, data.notes || {});
      renderNoteButtons();
    }
  });

  function getSections() {
    return [...document.querySelectorAll('section')].map((s, i) => {
      const id = s.id || `section-${i}`;
      if (!s.id) s.id = id;
      const label =
        s.querySelector('ez-section-title, h1, h2')?.textContent?.trim() ||
        id;
      return { id, label };
    });
  }

  function renderNoteButtons() {
    document.querySelectorAll('.dn-btn').forEach(el => el.remove());
    document.querySelectorAll('section').forEach((s, i) => {
      const id = s.id || `section-${i}`;
      s.style.position = 'relative';
      const btn = document.createElement('button');
      btn.className = 'dn-btn';
      btn.textContent = notes[id] ? '📝' : '+';
      btn.title = notes[id] ? `Nota: ${notes[id]}` : 'Agregar nota';
      btn.style.cssText =
        'position:absolute;top:8px;right:8px;z-index:9999;' +
        'background:#E84B7A;color:#fff;border:none;border-radius:50%;' +
        'width:32px;height:32px;cursor:pointer;font-size:14px;' +
        'display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.2);';
      btn.addEventListener('click', () => {
        const note = prompt(`Nota para "${id}":`, notes[id] || '');
        if (note !== null) {
          notes[id] = note;
          btn.textContent = note ? '📝' : '+';
          btn.title = note ? `Nota: ${note}` : 'Agregar nota';
          window.parent.postMessage({ type: 'NOTE_UPDATE', sectionId: id, note }, '*');
        }
      });
      s.appendChild(btn);
    });
  }

  window.addEventListener('load', () => {
    window.parent.postMessage({ type: 'READY', sections: getSections() }, '*');
  });
}
