if (window.self !== window.top) {
  const notes = {};
  const btns = {};

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
      Object.keys(notes).forEach(k => delete notes[k]);
      Object.assign(notes, data.notes || {});
      renderNoteButtons();
    }

    if (data.type === 'NOTE_SAVED') {
      notes[data.sectionId] = data.note;
      const btn = btns[data.sectionId];
      if (btn) {
        btn.textContent = data.note ? '📝' : '+';
        btn.title = data.note ? `Nota: ${data.note}` : 'Agregar nota';
      }
    }
  });

  function renderNoteButtons() {
    document.querySelectorAll('.dn-btn').forEach(el => el.remove());
    document.querySelectorAll('section').forEach((s, i) => {
      const id = s.id || `section-${i}`;
      if (!s.id) s.id = id;
      s.style.position = 'relative';

      const btn = document.createElement('button');
      btn.className = 'dn-btn';
      btn.textContent = notes[id] ? '📝' : '+';
      btn.title = notes[id] ? `Nota: ${notes[id]}` : 'Agregar nota';
      btn.style.cssText =
        'position:absolute;top:8px;right:8px;z-index:9999;' +
        'background:#E84B7A;color:#fff;border:none;border-radius:50%;' +
        'width:32px;height:32px;cursor:pointer;font-size:16px;' +
        'display:flex;align-items:center;justify-content:center;' +
        'box-shadow:0 2px 8px rgba(0,0,0,.25);line-height:1;';

      btn.addEventListener('click', () => {
        window.parent.postMessage({
          type: 'OPEN_NOTE_MODAL',
          sectionId: id,
          current: notes[id] || ''
        }, '*');
      });

      btns[id] = btn;
      s.appendChild(btn);
    });
  }

  window.addEventListener('load', () => {
    const sections = [...document.querySelectorAll('section')].map((s, i) => {
      const id = s.id || `section-${i}`;
      if (!s.id) s.id = id;
      const label =
        s.querySelector('ez-section-title, h1, h2')?.textContent?.trim() || id;
      return { id, label };
    });
    window.parent.postMessage({ type: 'READY', sections }, '*');
  });
}
