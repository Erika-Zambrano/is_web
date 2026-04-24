// Header: add .scrolled on scroll
const header = document.querySelector('.header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile menu: toggle nav on small screens
const menuBtn = document.querySelector('.menu-btn');
const headerEl = document.querySelector('.header');
if (menuBtn && headerEl) {
  menuBtn.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
  });
}
