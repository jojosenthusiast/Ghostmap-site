// Nav mobile toggle with scroll lock
const toggle = document.querySelector('.nav__mobile-toggle');
const links  = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const opened = links.classList.toggle('nav__links--open');
    document.body.classList.toggle('nav-open', opened);
    toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });
}

// Active nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach(a => {
  const href = (a.getAttribute('href') || '').split('/').pop();
  if (href === path || (path === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// Dynamic footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
