document.addEventListener("DOMContentLoaded", function() {
    const loginOverlay = document.getElementById("loginOverlay");
    const loginForm = document.getElementById("loginForm");
  
    if (loginForm) {
      loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
       
        
        // Optionally, hide the overlay if you want
        // loginOverlay.style.display = "none";
        
        // Redirect to the home page (change the URL if needed)
        window.location.href = "index.html";
      });
    }
  });
  