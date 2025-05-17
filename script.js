document.addEventListener('DOMContentLoaded', () => {
    // === Navigation Active State ===
    const navLinks = document.querySelectorAll('.nav-links a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
      });
    });
  
    // === Portfolio Filtering ===
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Toggle active class
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        const filterValue = button.dataset.filter;
  
        portfolioItems.forEach(item => {
          const itemCategory = item.dataset.category;
  
          if (filterValue === 'all' || itemCategory === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  
    // === Contact Form Submission ===
    const contactForm = document.getElementById('contactForm');
  
    if (contactForm) {
      contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      });
    }
  
    // === Smooth Scroll Navigation ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
  
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);
  
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // === Mobile Navbar Toggle ===
    const toggleButton = document.querySelector('.navbar-toggle');
    const navMenu = document.querySelector('.nav-links');
  
    if (toggleButton && navMenu) {
      toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }
  
    // === Back to Top Button ===
    const backToTopBtn = document.querySelector('.back-to-top');
  
    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
          backToTopBtn.style.display = 'block';
        } else {
          backToTopBtn.style.display = 'none';
        }
      });
  
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  });
  