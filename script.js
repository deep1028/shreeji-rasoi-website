window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.curtain').classList.add('open');
  }, 300);
});

const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileCloseBtn = document.querySelector('.mobile-menu-close');
const mobileLinks = document.querySelectorAll('.mobile-menu .nav-links a');
const cards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
let current = 0;
let autoSlide = setInterval(() => goTo(current + 1), 5000);

if (window.AOS) {
  AOS.init({
    duration: 800,
    once: true,
    offset: 60,
  });
}

// Helper function to close menu
function closeMenu() {
  menuToggle.classList.remove('open');
  mobileMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

// Helper function to open menu
function openMenu() {
  menuToggle.classList.add('open');
  mobileMenu.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
});

// Hamburger toggle
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.classList.contains('open');
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close button click
mobileCloseBtn?.addEventListener('click', closeMenu);

// Close menu when a link is tapped
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close menu on escape key (desktop/hybrid)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    closeMenu();
  }
});

// Close menu when clicking outside (on backdrop)
mobileMenu?.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    closeMenu();
  }
});

function goTo(index) {
  cards[current].classList.remove('active');
  cards[current].classList.add('exit');
  dots[current].classList.remove('active');

  const prev = current;
  setTimeout(() => {
    cards[prev].classList.remove('exit');
  }, 600);

  current = (index + cards.length) % cards.length;
  cards[current].classList.add('active');
  dots[current].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
  clearInterval(autoSlide);
  goTo(current - 1);
  autoSlide = setInterval(() => goTo(current + 1), 5000);
});

document.querySelector('.next').addEventListener('click', () => {
  clearInterval(autoSlide);
  goTo(current + 1);
  autoSlide = setInterval(() => goTo(current + 1), 5000);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlide);
    goTo(i);
    autoSlide = setInterval(() => goTo(current + 1), 5000);
  });
});