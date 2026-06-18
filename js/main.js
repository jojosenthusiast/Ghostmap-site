// Nav mobile toggle
const toggle = document.querySelector('.nav__mobile-toggle');
const links  = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('nav__links--open'));
}

// Active nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach(a => {
  const href = a.getAttribute('href').split('/').pop();
  if (href === path || (path === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});
