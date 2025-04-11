// main.js
document.addEventListener("DOMContentLoaded", function() {
  /*******************************
   * Hamburger and Navigation
   *******************************/
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
  
  /*******************************
   * Car Data and Dynamic Card Generation
   *******************************/
  const cars = [
    {
      id: 1,
      brand: "ferrari",
      name: "Ferrari F80",
      price: "$330,000",
      image: "./images/ferrari-f80.jpg",
      type: "sport",
      specs: {
        engine: "V12 Twin-Turbo",
        horsepower: "900 HP",
        acceleration: "2.5s 0-60 mph",
        topspeed: "250 mph",
        seats: "2",
        description: "The Ferrari F80 is a hypercar that pushes the boundaries of performance and design."
      }
    },
    {
      id: 2,
      brand: "lambo",
      name: "Lamborghini Aventador",
      price: "$400,000",
      image: "./images/Lamborghini-Aventador.avif",
      type: "sport",
      specs: {
        engine: "V12 Natural Aspirated",
        horsepower: "770 HP",
        acceleration: "2.9s 0-60 mph",
        topspeed: "217 mph",
        seats: "2",
        description: "The Aventador represents the pinnacle of Lamborghini's design and engineering."
      }
    },
    {
      id: 3,
      brand: "tesla",
      name: "Tesla Model S Plaid",
      price: "$135,000",
      image: "./images/Tesla_Model_S.jpg",
      type: "electric",
      specs: {
        engine: "Triple Electric Motor",
        horsepower: "1,020 HP",
        acceleration: "1.99s 0-60 mph",
        topspeed: "200 mph",
        range: "390 miles",
        seats: "5",
        description: "The fastest production car in the world with unmatched electric performance."
      }
    }
  ];
  
  const modelsGrid = document.getElementById("modelsGrid");
  if (modelsGrid) {
    modelsGrid.innerHTML = "";
    cars.forEach(car => {
      const card = document.createElement("div");
      card.classList.add("model-card");
      // Use the flip-container structure for a flip effect on hover
      card.innerHTML = `
        <div class="flip-container">
          <div class="flipper">
            <!-- Front Face -->
            <div class="front">
              <img src="${car.image}" alt="${car.name}" />
            </div>
            <!-- Back Face -->
            <div class="back">
              <h3>${car.name}</h3>
              <p>${car.specs.description}</p>
              <div class="model-specs-hover">
                <span><strong>Engine:</strong> ${car.specs.engine}</span>
                <span><strong>0-60:</strong> ${car.specs.acceleration}</span>
                <span><strong>HP:</strong> ${car.specs.horsepower}</span>
                <span><strong>Transmission:</strong> ${car.specs.transmission || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="model-info">
          <h3>${car.name}</h3>
          <div class="model-specs">
            <span>${car.specs.acceleration}</span>
            <span>${car.specs.horsepower}</span>
            <span>${car.specs.engine}</span>
          </div>
        </div>
      `;
      modelsGrid.appendChild(card);
    });
  }
  
  /*******************************
   * Existing Functionalities
   *******************************/
  
  // Contact Form (if any)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Thank you for contacting us! We will get back to you soon.");
      contactForm.reset();
    });
  }
  
  // Dropdown hover for menu (if exists)
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
  
  // Login Modal Functionality
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
  
  // ---------- Consultation Modal Functionality ----------
  const bookConsultationBtn = document.getElementById('bookConsultationBtn');
  const consultationOverlay = document.getElementById('consultationOverlay');
  const closeConsultationBtn = document.getElementById('closeConsultationBtn');
  const consultationForm = document.getElementById('consultationForm');
  if (bookConsultationBtn && consultationOverlay) {
    bookConsultationBtn.addEventListener('click', function(e) {
      e.preventDefault();
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
  
  // ---------- Contact Us Modal Functionality ----------
  const contactUsBtn = document.getElementById('contactUsBtn');
  const contactUsOverlay = document.getElementById('contactUsOverlay');
  const closeContactUsBtn = document.getElementById('closeContactUsBtn');
  const contactUsForm = document.getElementById('contactUsForm');
  if (contactUsBtn && contactUsOverlay) {
    contactUsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      contactUsOverlay.classList.add('active');
    });
  }
  if (closeContactUsBtn) {
    closeContactUsBtn.addEventListener('click', function() {
      contactUsOverlay.classList.remove('active');
    });
  }
  contactUsOverlay.addEventListener('click', function(e) {
    if (e.target === contactUsOverlay) {
      contactUsOverlay.classList.remove('active');
    }
  });
  if (contactUsForm) {
    contactUsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting us! We will get back to you soon.');
      contactUsOverlay.classList.remove('active');
      contactUsForm.reset();
    });
  }
  
  // ---------- Book Appointment Modal Functionality ----------
  const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
  const bookAppointmentOverlay = document.getElementById('bookAppointmentOverlay');
  const closeBookAppointmentBtn = document.getElementById('closeBookAppointmentBtn');
  const bookAppointmentForm = document.getElementById('bookAppointmentForm');
  if (bookAppointmentBtn && bookAppointmentOverlay) {
    bookAppointmentBtn.addEventListener('click', function(e) {
      e.preventDefault();
      bookAppointmentOverlay.classList.add('active');
    });
  }
  if (closeBookAppointmentBtn) {
    closeBookAppointmentBtn.addEventListener('click', function() {
      bookAppointmentOverlay.classList.remove('active');
    });
  }
  bookAppointmentOverlay.addEventListener('click', function(e) {
    if (e.target === bookAppointmentOverlay) {
      bookAppointmentOverlay.classList.remove('active');
    }
  });
  if (bookAppointmentForm) {
    bookAppointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for booking an appointment! We will contact you soon.');
      bookAppointmentOverlay.classList.remove('active');
      bookAppointmentForm.reset();
    });
  }
  
  /*******************************
   * Newsletter Modal Functionality
   *******************************/
  const newsletterForm = document.getElementById('newsletterForm'); // Ensure your form has this ID
  const newsletterSuccessModal = document.getElementById('newsletterSuccessModal');
  const closeNewsletterModal = document.getElementById('closeNewsletterModal');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (newsletterSuccessModal) {
        newsletterSuccessModal.classList.add('active');
      }
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput) {
        emailInput.value = '';
      }
    });
  }

  if (closeNewsletterModal) {
    closeNewsletterModal.addEventListener('click', function() {
      newsletterSuccessModal.classList.remove('active');
    });
  }

  if (newsletterSuccessModal) {
    newsletterSuccessModal.addEventListener('click', function(e) {
      if (e.target === newsletterSuccessModal) {
        newsletterSuccessModal.classList.remove('active');
      }
    });
  }
  
  /*******************************
   * Mini-Cart Summary on Hover (optional)
   *******************************/
  // (Ensure your HTML has a container with class "cart-icon-container" or modify the selector as needed)
  const cartIconContainer = document.querySelector('.cart-link'); // using the cart-link anchor only
  if (cartIconContainer) {
    const miniCartDropdown = document.createElement('div');
    miniCartDropdown.className = 'mini-cart-dropdown';
    cartIconContainer.appendChild(miniCartDropdown);

    function updateMiniCartDropdown() {
      const cart = getCart(); // Reuse your existing getCart() function
      if (cart.length === 0) {
        miniCartDropdown.innerHTML = '<p style="padding: 10px; text-align: center; font-size: 0.9rem;">Your cart is empty.</p>';
      } else {
        let html = '';
        cart.forEach(item => {
          const part = partsData.find(p => p.id === item.id);
          if (part) {
            html += `
              <div class="mini-cart-item">
                <div class="mini-cart-item-img">
                  <img src="${part.image}" alt="${part.title}">
                </div>
                <div class="mini-cart-item-details">
                  <h4 class="mini-cart-item-title">${part.title}</h4>
                  <p class="mini-cart-item-qty">Qty: ${item.quantity}</p>
                </div>
              </div>
            `;
          }
        });
        const total = cart.reduce((sum, item) => {
          const part = partsData.find(p => p.id === item.id);
          return part ? sum + part.price * item.quantity : sum;
        }, 0);
        html += `<div class="mini-cart-subtotal" style="padding: 10px; font-weight: bold; text-align: right; border-top: 1px solid #ddd;">Subtotal: $${total.toFixed(2)}</div>`;
        miniCartDropdown.innerHTML = html;
      }
    }

    cartIconContainer.addEventListener('mouseenter', function() {
      updateMiniCartDropdown();
      miniCartDropdown.classList.add('active');
    });
    cartIconContainer.addEventListener('mouseleave', function() {
      miniCartDropdown.classList.remove('active');
    });
  }
  
  /*******************************
   * Smooth Scrolling for Anchor Links
   *******************************/
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      let targetId = this.getAttribute('href');
      if (targetId === '#') return;
      let targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
  
  /*******************************
   * Header Scroll Shadow
   *******************************/
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.luxury-header');
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
  
  /*******************************
   * Cart Functionality
   *******************************/
  function initializeCart() {
    if (!localStorage.getItem('mlaCart')) {
      localStorage.setItem('mlaCart', JSON.stringify([]));
    }
  }
  
  function getCart() {
    return JSON.parse(localStorage.getItem('mlaCart')) || [];
  }
  
  function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      const cart = getCart();
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = totalItems;
      cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
  }
  
  function addToCart(partId) {
    const part = cars.find(p => p.id === partId);
    if (!part) return;
    
    let cart = getCart();
    const existingItem = cart.find(item => item.id === partId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: part.id,
        title: part.name,
        price: parseFloat(part.price.replace(/[^0-9.-]+/g,"")), // Convert formatted price to number
        image: part.image,
        quantity: 1
      });
    }
    
    localStorage.setItem('mlaCart', JSON.stringify(cart));
    updateCartCount();
    updateMiniCart();
    
    const addButton = document.querySelector('.modal-actions .btn-primary');
    if (addButton) {
      addButton.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
      addButton.classList.add('added');
      setTimeout(() => {
        addButton.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
        addButton.classList.remove('added');
      }, 2000);
    }
  }
  
  function updateMiniCart() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    document.querySelectorAll('.mini-cart-count').forEach(element => {
      element.textContent = totalItems;
    });
    
    const miniCartElements = document.querySelectorAll('.mini-cart');
    miniCartElements.forEach(miniCart => {
      const emptyEl = miniCart.querySelector('.mini-cart-empty');
      const itemsEl = miniCart.querySelector('.mini-cart-items');
      const summaryEl = miniCart.querySelector('.mini-cart-summary');
      const subtotalEl = miniCart.querySelector('.mini-cart-subtotal span:last-child');
      
      if (totalItems === 0) {
        if (emptyEl) emptyEl.style.display = 'block';
        if (itemsEl) itemsEl.style.display = 'none';
        if (summaryEl) summaryEl.style.display = 'none';
      } else {
        if (emptyEl) emptyEl.style.display = 'none';
        if (itemsEl) {
          itemsEl.innerHTML = '';
          itemsEl.style.display = 'block';
          cart.forEach(item => {
            const part = cars.find(p => p.id === item.id);
            if (part) {
              const miniCartItem = document.createElement('div');
              miniCartItem.className = 'mini-cart-item';
              miniCartItem.innerHTML = `
                <div class="mini-cart-item-img">
                  <img src="${part.image}" alt="${part.name}">
                </div>
                <div class="mini-cart-item-details">
                  <h4 class="mini-cart-item-title">${part.name}</h4>
                  <div class="mini-cart-item-price">$${(part.price * item.quantity).toFixed(2)}</div>
                  <div class="mini-cart-item-qty">Qty: ${item.quantity}</div>
                </div>
              `;
              itemsEl.appendChild(miniCartItem);
            }
          });
        }
        
        if (summaryEl) summaryEl.style.display = 'block';
        if (subtotalEl) {
          const subtotal = cart.reduce((sum, item) => {
            const part = cars.find(p => p.id === item.id);
            return part ? sum + (parseFloat(part.price.replace(/[^0-9.-]+/g,"")) * item.quantity) : sum;
          }, 0);
          subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        }
      }
    });
  }
  
  initializeCart();
  updateCartCount();
  updateMiniCart();
});
