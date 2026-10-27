document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. MOBILE INTERACTIVE NAVIGATION TOGGLE
  // ==========================================
  const navToggle = document.querySelector('.nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  const navbar = document.getElementById('navbar');

  if (navToggle && navLinksContainer) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      
      // Toggle accessibility attribute status
      navToggle.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle visual display classes
      navLinksContainer.classList.toggle('nav-active');
      navToggle.classList.toggle('toggle-open');
    });

    // Close the navigation tray when clicking an individual item link
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('nav-active');
        navToggle.classList.remove('toggle-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================
  // 2. SCROLL WINDOW LOOKOUT FOR BLUR EFFECT
  // ==========================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // ==========================================
  // 3. CONTACT FORM SIMULATION & ALERTS
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Target localized variables
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      // Set submission processing UI state
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      formStatus.style.color = '#4f46e5';
      formStatus.textContent = 'Processing your message...';

      // Simulate network request latency
      setTimeout(() => {
        contactForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        
        // Success presentation to the user
        formStatus.style.color = '#10b981';
        formStatus.textContent = 'Thank you, Vincent received your message! He will get back to you shortly.';
        
        // Remove status text alert window after 5 seconds
        setTimeout(() => {
          formStatus.textContent = '';
        }, 5000);
      }, 1500);
    });
  }
});
