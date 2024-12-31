// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Active navigation link highlight
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 60) {
          current = section.getAttribute('id');
      }
  });

  navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').slice(1) === current) {
          item.classList.add('active');
      }
  });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Show success message (you can replace this with actual form submission)
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
      }
  });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(element => {
  observer.observe(element);
});

// Typing animation for the greeting
const greeting = "Hey there! I'm-";
const greetingElement = document.querySelector('.greeting');
let i = 0;

function typeGreeting() {
  if (i < greeting.length) {
      greetingElement.textContent += greeting.charAt(i);
      i++;
      setTimeout(typeGreeting, 100);
  }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
  greetingElement.textContent = '';
  typeGreeting();
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
      navbar.classList.remove('scroll-up');
      return;
  }
  
  if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
      // Scroll down
      navbar.classList.remove('scroll-up');
      navbar.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
      // Scroll up
      navbar.classList.remove('scroll-down');
      navbar.classList.add('scroll-up');
  }
  
  lastScroll = currentScroll;
});

