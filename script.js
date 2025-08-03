
  // Smooth scroll nav links
  document.querySelectorAll('a.option').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Footer links smooth scroll
  document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // "Explore Our Services" button scroll
  document.getElementById('go-service').addEventListener('click', () => {
    const servicesSection = document.getElementById('services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Contact form validation and confirmation
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if(name === '' || email === '' || message === '') {
      alert('Please fill all required fields.');
      return;
    }
    const confirmed = confirm(`Send message?\nName: ${name}\nEmail: ${email}`);
    if(confirmed) {
      alert('Message sent successfully! (Simulation)');
      contactForm.reset();
    }
  });

  // Highlight nav links on scroll
  const sections = document.querySelectorAll('section, .about, .hero-sec');
  const navLinks = document.querySelectorAll('#menu .option');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if(window.scrollY >= sectionTop) {
        currentSectionId = section.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href') === '#' + currentSectionId) {
        link.classList.add('active');
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".hero-msg, #hero-img, .about, #services, .why-choose-us-container, .testimonials, .contact-section"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedElements.forEach(el => {
    // Pause animations by default
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
});

