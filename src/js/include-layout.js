import headerHTML from '../partials/header.html?raw';
import footerHTML from '../partials/footer.html?raw';

function markCurrentNavLink() {
  const pathname = window.location.pathname || '';
  const currentFile = pathname.split('/').pop() || 'index.html';
  const file = currentFile === '' ? 'index.html' : currentFile;
  const nav = document.querySelector('header .nav');
  if (!nav) return;
  nav.querySelectorAll('a[href]').forEach(function (a) {
    const href = a.getAttribute('href');
    const linkFile = href ? href.replace(/^.*\//, '') : '';
    if (linkFile === file || (file === 'index.html' && (linkFile === 'index.html' || linkFile === ''))) {
      a.classList.add('nav-current');
    } else {
      a.classList.remove('nav-current');
    }
  });
}

function loadLayout() {
  const mainHeader = document.getElementById('main-header');
  const mainFooter = document.getElementById('main-footer');

  if (mainHeader) {
    const nodes = Array.from(new DOMParser().parseFromString(headerHTML, 'text/html').body.childNodes);
    mainHeader.replaceWith(...nodes);
    markCurrentNavLink();
  }

  if (mainFooter) {
    const nodes = Array.from(new DOMParser().parseFromString(footerHTML, 'text/html').body.childNodes);
    mainFooter.replaceWith(...nodes);
  }
}

loadLayout();
