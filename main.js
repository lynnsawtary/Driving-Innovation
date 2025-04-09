document.addEventListener("DOMContentLoaded", function() {
  // Contact Form Validation & Submission (if any contact form exists)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Thank you for contacting us! We will get back to you soon.");
      contactForm.reset();
    });
  }

  // Dropdown Menu Hover Effect
  const menu = document.querySelector('.menu');
  const dropdown = document.querySelector('.dropdown');
  if (menu && dropdown) {
    menu.addEventListener('mouseenter', function() {
      dropdown.style.display = 'block';
    });
    menu.addEventListener('mouseleave', function() {
      dropdown.style.display = 'none';
    });
  }

  // Login Functionality
  const loginLink = document.getElementById("loginLink");
  const loginOverlay = document.getElementById("loginOverlay");
  const loginForm = document.getElementById("loginForm");
  const closeBtn = document.getElementById("closeBtn");
  if (loginLink && loginOverlay) {
    loginLink.addEventListener("click", function(e) {
      e.preventDefault();
      loginOverlay.style.display = "flex";
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", function() {
      loginOverlay.style.display = "none";
    });
  }
  window.addEventListener("click", function(e) {
    if (e.target === loginOverlay) {
      loginOverlay.style.display = "none";
    }
  });
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      alert("Logged in successfully with email: " + email);
      loginOverlay.style.display = "none";
      window.location.href = "index.html";
    });
  }

  // Consultation Modal Functionality
  const bookBtn = document.getElementById('bookConsultationBtn');
  const consultationOverlay = document.getElementById('consultationOverlay');
  const closeConsultationBtn = document.getElementById('closeConsultationBtn');
  const consultationForm = document.getElementById('consultationForm');
  if (bookBtn && consultationOverlay) {
    bookBtn.addEventListener('click', function() {
      consultationOverlay.classList.add('active');
    });
  }
  if (closeConsultationBtn) {
    closeConsultationBtn.addEventListener('click', function() {
      consultationOverlay.classList.remove('active');
    });
  }
  consultationOverlay.addEventListener('click', function(e) {
    if (e.target === consultationOverlay) {
      consultationOverlay.classList.remove('active');
    }
  });
  if (consultationForm) {
    consultationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for booking a consultation! We will contact you soon.');
      consultationOverlay.classList.remove('active');
      consultationForm.reset();
    });
  }
});
