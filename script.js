// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Hide nav pill slightly on scroll down, show on scroll up
let lastY = window.scrollY;
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.style.top = y > lastY && y > 300 ? '-90px' : '16px';
  lastY = y;
}, { passive: true });
