// AC1 Learning - simple bilingual site logic (no build step, no backend required)

document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mainNav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

// Contact form (no backend yet - shows a confirmation message)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const messages = {
    es: '¡Gracias! Hemos recibido tu mensaje y te contactaremos pronto.',
    en: 'Thank you! We\'ve received your message and will contact you soon.'
  };
  alert(messages[currentLang]);
  form.reset();
});

// ---- i18n ----
const translations = {
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.why': 'Why AC1',
    'nav.testimonials': 'Clients',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Business Consulting & Training',
    'hero.title': 'Stronger teams. Clearer decisions. Measurable results.',
    'hero.lead': 'AC1 Learning helps companies build the talent and capabilities they need to grow, through tailored training programs and consulting.',
    'hero.ctaPrimary': 'Talk to a consultant',
    'hero.ctaSecondary': 'See services',
    'hero.stat1': 'years of experience',
    'hero.stat2': 'companies served',
    'hero.stat3': 'satisfied clients',

    'about.eyebrow': 'About us',
    'about.title': 'We are the team that trains your team',
    'about.text': 'AC1 Learning is a consulting and training firm focused on corporate talent development. We design practical leadership, sales, customer service, and technical skills programs tailored to each organization\'s reality. We work alongside your leadership team to diagnose needs, design content, and measure the real impact of every intervention.',
    'about.v1t': 'Tailored programs',
    'about.v1d': 'Programs designed around your company\'s goals and culture.',
    'about.v2t': 'Results-driven',
    'about.v2d': 'We measure impact on performance, not just attendance.',
    'about.v3t': 'Expert consultants',
    'about.v3d': 'Facilitators with real industry experience.',

    'services.eyebrow': 'Services',
    'services.title': 'Training and consulting solutions',
    'services.sub': 'We combine diagnosis, instructional design, and facilitation to drive real change in your organization.',
    'services.c1t': 'Leadership & Team Management',
    'services.c1d': 'We build leadership, communication, and performance management skills for middle and senior managers.',
    'services.c2t': 'Sales & Customer Service',
    'services.c2d': 'Practical programs to improve conversion, negotiation, and customer experience.',
    'services.c3t': 'Organizational Consulting',
    'services.c3d': 'Talent gap diagnosis and training plans aligned with strategy.',
    'services.c4t': 'Digital Training & Tools',
    'services.c4d': 'Training in digital tools, productivity, and technology adoption for teams.',
    'services.c5t': 'Soft Skills',
    'services.c5d': 'Communication, teamwork, change management, and conflict resolution.',
    'services.c6t': 'Impact Measurement',
    'services.c6d': 'We evaluate the effect of every program on key business indicators.',

    'why.eyebrow': 'Why choose us',
    'why.title': 'A practical approach, not just theory',
    'why.i1t': 'Real diagnosis',
    'why.i1d': 'We start by understanding your business before proposing any program.',
    'why.i2t': 'Tailored content',
    'why.i2d': 'No generic templates: every program is adapted to your industry.',
    'why.i3t': 'Expert facilitators',
    'why.i3d': 'Consultants with real-world track records leading every session.',
    'why.i4t': 'Post-program follow-up',
    'why.i4d': 'We support the application of what was learned in daily work.',

    'testimonials.eyebrow': 'Clients',
    'testimonials.title': 'Companies that trust AC1 Learning',
    'testimonials.q1': '"The leadership program transformed the way our managers give feedback to their teams."',
    'testimonials.a1': '— HR Director, retail company',
    'testimonials.q2': '"AC1 Learning understood our business from the first meeting. The results showed in our sales."',
    'testimonials.a2': '— Commercial Manager, services sector',
    'testimonials.q3': '"A very professional team of facilitators, with practical, applicable content."',
    'testimonials.a3': '— General Manager, industrial sector',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Let\'s talk about your next training program',
    'contact.sub': 'Tell us what your team needs and we\'ll reach out to schedule a call.',
    'contact.name': 'Name',
    'contact.company': 'Company',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'What do you need?',
    'contact.submit': 'Send message',
    'contact.note': 'By submitting this form you agree to be contacted about your request.',

    'footer.tagline': 'Business consulting and training.',
    'footer.rights': 'All rights reserved.'
  }
};

let currentLang = 'es';
const originalEs = {}; // cache original Spanish text so we can switch back without reloading

document.querySelectorAll('[data-i18n]').forEach(el => {
  originalEs[el] = el.innerHTML;
});

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (lang === 'es') {
      el.innerHTML = originalEs[el];
    } else if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

