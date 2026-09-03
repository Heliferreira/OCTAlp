document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('siteNav');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    }, { passive: true });
  }
});