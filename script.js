const navToggle = document.querySelector('.navtoggle');
const menu = document.getElementById('menu');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const animatedItems = document.querySelectorAll('.trusted-list a, .about-copy, .about-img, .about-note, .stat, .rcard, .detail, .guide, .sup, .step, .fb, .gantt, .float-card, .hero-image-shell');

document.body.classList.add('js-ready');

if (navToggle && menu) {
  navToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    navToggle.textContent = isOpen ? 'Close' : 'Menu';
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
      navToggle.textContent = 'Menu';
    });
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animatedItems.forEach((item) => observer.observe(item));
} else {
  animatedItems.forEach((item) => item.classList.add('is-visible'));
}

window.setTimeout(() => {
  animatedItems.forEach((item) => item.classList.add('is-visible'));
}, 1200);

const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
        if (isCurrent) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

  sections.forEach((section) => navObserver.observe(section));
}
