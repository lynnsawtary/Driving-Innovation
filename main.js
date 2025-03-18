document.addEventListener("DOMContentLoaded", function() {
    // Contact Form Validation & Submission
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
  
    // Show the login overlay when clicking the login link
    if (loginLink && loginOverlay) {
      loginLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginOverlay.style.display = "flex"; // Ensure the overlay is styled for flex display
      });
    }
  
    // Close the overlay when clicking the close button
    if (closeBtn) {
      closeBtn.addEventListener("click", function() {
        loginOverlay.style.display = "none";
      });
    }
  
    // Hide login overlay when clicking outside the login container
    window.addEventListener("click", function(e) {
      if (e.target === loginOverlay) {
        loginOverlay.style.display = "none";
      }
    });
  
    // Handle login form submission and redirect to the home page after login
    if (loginForm) {
      loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        // For demonstration, simply show an alert. Replace with real authentication logic.
        alert("Logged in successfully with email: " + email);
        loginOverlay.style.display = "none";
        // Redirect to the home page (index.html)
        window.location.href = "index.html";
      });
    }
  });
  