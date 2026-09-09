// AC1 Learning - site scripts (no build step, no backend required)

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

// Contact form (no backend yet - shows a confirmation message)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias! Hemos recibido tu mensaje y te contactaremos pronto.');
    contactForm.reset();
  });
}

// Diagnostic form (no backend yet - shows a confirmation message)
const diagForm = document.getElementById('diagnostico-form');
if (diagForm) {
  diagForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Listo! Te contactaremos para coordinar tu diagnóstico de inglés.');
    diagForm.reset();
  });
}
