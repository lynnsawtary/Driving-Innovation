// Contact Form Validation & Submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Thank you for contacting us! We will get back to you soon.");
            form.reset();
        });
    }
});

// Dropdown Menu Hover Effect (Same as Before)
document.querySelector('.menu').addEventListener('mouseenter', function() {
    document.querySelector('.dropdown').style.display = 'block';
});

document.querySelector('.menu').addEventListener('mouseleave', function() {
    document.querySelector('.dropdown').style.display = 'none';
});

// document.querySelector('.menu').addEventListener('mouseenter', function() {
//     document.querySelector('.dropdown').style.display = 'block';
// });

// document.querySelector('.menu').addEventListener('mouseleave', function() {
//     document.querySelector('.dropdown').style.display = 'none';
// });
