document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for Performance Packages
    const tabBtns = document.querySelectorAll('.tab-btn');
    const packageContents = document.querySelectorAll('.package-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            packageContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // [Keep all your other existing JavaScript code below...]
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Gallery images (replace with your actual images)
    const galleryImages = [
        'custom1.jpg',
        'custom2.jpg',
        'performance1.jpg',
        'performance2.jpg',
        'tech1.jpg',
        'tech2.jpg',
        'repair1.jpg',
        'repair2.jpg'
    ];
    
    const galleryContainer = document.querySelector('.gallery-container');
    
    if (galleryContainer) {
        galleryImages.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = `images/${image}`;
            img.alt = 'Our work';
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            
            const icon = document.createElement('i');
            icon.className = 'fas fa-search-plus';
            
            overlay.appendChild(icon);
            galleryItem.appendChild(img);
            galleryItem.appendChild(overlay);
            galleryContainer.appendChild(galleryItem);
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
        // Modal system
        const modalContents = {
          packages: `
            <h3>Maintenance Packages</h3>
            <div class="package-grid">
              <div class="package-card">
                <h4>Essential Care</h4>
                <p class="price">$199</p>
                <ul>
                  <li>Oil & Filter Change</li>
                  <li>Fluid Level Inspection</li>
                  <li>Tire Rotation</li>
                  <li>Brake Check</li>
                </ul>
              </div>
              <div class="package-card">
                <h4>Premium Service</h4>
                <p class="price">$399</p>
                <ul>
                  <li>Full Synthetic Oil</li>
                  <li>Comprehensive Inspection</li>
                  <li>Battery Test</li>
                  <li>Air Filter Replacement</li>
                </ul>
              </div>
            </div>
            <a href="#contact" class="btn btn-primary" style="margin-top:20px;">Schedule Service</a>
          `,
          gallery: `
            <h3>Our Custom Work</h3>
            <div class="image-grid">
              <img src="images/custom1.jpg" alt="Custom paint job">
              <img src="images/custom2.jpg" alt="Interior customization">
              <img src="images/custom3.jpg" alt="Wheel upgrade">
              <img src="images/custom4.jpg" alt="Lighting modification">
            </div>
            <p>View our <a href="gallery.html" style="color:var(--secondary);">full gallery</a> for more examples</p>
          `,
          dyno: `
            <h3>Performance Results</h3>
            <div id="dyno-results">
              <p><strong>Typical Gains:</strong></p>
              <ul>
                <li>Stage 1: +15-20% HP</li>
                <li>Stage 2: +25-35% HP</li>
                <li>Stage 3: +40-50% HP</li>
              </ul>
              <div style="margin-top:20px; padding:15px; background:var(--accent); border-radius:5px;">
                <p>Contact us for a custom dyno test of your vehicle</p>
                <a href="#contact" class="btn btn-primary">Request Dyno Test</a>
              </div>
            </div>
          `,
          tech: `
            <h3>Technology Installations</h3>
            <div class="image-grid">
              <img src="images/tech1.jpg" alt="Audio system">
              <img src="images/tech2.jpg" alt="Navigation upgrade">
            </div>
            <p style="margin-top:20px;">We integrate:</p>
            <ul>
              <li>Premium audio systems</li>
              <li>Advanced safety tech</li>
              <li>Vehicle tracking systems</li>
              <li>Custom lighting solutions</li>
            </ul>
          `
        };
      
        // Button handlers
        document.querySelectorAll('[data-modal]').forEach(btn => {
          btn.addEventListener('click', function(e) {
            if(this.getAttribute('href') === '#') {
              e.preventDefault();
              const modalType = this.dataset.modal;
              showModal(modalType);
            }
            // External links will proceed normally
          });
        });
      
        function showModal(type) {
          const modalHTML = `
            <div class="modal-overlay active">
              <div class="modal-container">
                <span class="modal-close">&times;</span>
                ${modalContents[type]}
              </div>
            </div>
          `;
          
          const modal = document.createRange().createContextualFragment(modalHTML);
          document.body.appendChild(modal);
          
          // Close handlers
          modal.querySelector('.modal-close').addEventListener('click', closeModal);
          modal.querySelector('.modal-overlay').addEventListener('click', function(e) {
            if(e.target === this) closeModal();
          });
          
          // Escape key close
          document.addEventListener('keydown', function escClose(e) {
            if(e.key === 'Escape') closeModal();
          });
          
          function closeModal() {
            document.querySelector('.modal-overlay').classList.remove('active');
            setTimeout(() => {
              document.querySelector('.modal-overlay').remove();
            }, 300);
            document.removeEventListener('keydown', escClose);
          }
        }
      });
    // Animated counter for stats
    const counters = document.querySelectorAll('.number');
    const speed = 200;
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Start counter when stats section is in view
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                observer.unobserve(statsSection);
            }
        });
        observer.observe(statsSection);
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[type="text"]:nth-of-type(2)').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the data to a server
            console.log({ name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }
    
    // Preloader (optional)
    window.addEventListener('load', function() {
        const preloader = document.createElement('div');
        preloader.className = 'preloader';
        preloader.innerHTML = '<div class="spinner"></div>';
        document.body.appendChild(preloader);
        
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000);
    });
});