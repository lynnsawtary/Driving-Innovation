    // JavaScript to handle Buy Now button clicks
    document.addEventListener('DOMContentLoaded', function() {
      const buttons = document.querySelectorAll('.buy-button');
      buttons.forEach(function(button) {
        button.addEventListener('click', function() {
          alert('Thank you for your interest! Purchase functionality coming soon.');
        });
      });
    });