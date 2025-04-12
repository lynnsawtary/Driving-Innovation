document.addEventListener('DOMContentLoaded', function() {
    /***********************
     * MINI-CART FUNCTIONALITY
     ***********************/
    let cart = JSON.parse(localStorage.getItem('mlaCart')) || [];
  
    const miniCartDropdown = document.getElementById('mini-cart-dropdown');
    const miniCartCountElems = document.querySelectorAll('.mini-cart-count');
    const miniCartItems = document.getElementById('mini-cart-items');
    const miniCartEmpty = document.getElementById('mini-cart-empty');
    const miniCartSummary = document.getElementById('mini-cart-summary');
  
    function getCart() {
      return JSON.parse(localStorage.getItem('mlaCart')) || [];
    }
  
    function saveCart() {
      localStorage.setItem('mlaCart', JSON.stringify(cart));
    }
  
    function updateMiniCartCount() {
        const currentCart = getCart(); // Your function to retrieve the cart from localStorage
        const totalItems = currentCart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('mini-cart-count').textContent = totalItems;
      }
      
      
  
    function updateMiniCartDropdown() {
      const currentCart = getCart();
      if (currentCart.length === 0) {
        miniCartDropdown.innerHTML = '<p style="padding: 10px; text-align: center; font-size: 0.9rem;">Your cart is empty.</p>';
      } else {
        let html = '';
        currentCart.forEach(item => {
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
        const total = currentCart.reduce((sum, item) => {
          const part = partsData.find(p => p.id === item.id);
          return part ? sum + (part.price * item.quantity) : sum;
        }, 0);
        html += `<div class="mini-cart-subtotal" style="padding: 10px; font-weight: bold; text-align: right; border-top: 1px solid #ddd;">Subtotal: $${total.toFixed(2)}</div>`;
        miniCartDropdown.innerHTML = html;
      }
    }
  
    const cartLink = document.querySelector('.cart-link');
    if (cartLink && miniCartDropdown) {
      cartLink.addEventListener('mouseenter', function() {
        updateMiniCartDropdown();
        miniCartDropdown.classList.add('active');
        miniCartDropdown.style.opacity = '1';
        miniCartDropdown.style.visibility = 'visible';
        miniCartDropdown.style.transform = 'translateY(0)';
      });
      cartLink.addEventListener('mouseleave', function() {
        miniCartDropdown.classList.remove('active');
        miniCartDropdown.style.opacity = '0';
        miniCartDropdown.style.visibility = 'hidden';
        miniCartDropdown.style.transform = 'translateY(20px)';
      });
    }
  
    updateMiniCartCount();
  
    /***********************
     * HEADER AND NAVIGATION
     ***********************/
    let hamburger = document.querySelector('.hamburger');
    let navLinks = document.querySelector('.nav-links');
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
  
    /***********************
     * PARTS DATA & RENDERING
     ***********************/
    let partsData = [
      {
        id: 1,
        title: "MLA Hybrid Electric Engine Module",
        category: "engine",
        price: 4000,
        sku: "MLA-HE-2026",
        image: "images/1-1.jpg",
        description: "The MLA Hybrid Electric Engine Module offers cutting-edge hybrid technology for improved fuel efficiency and reduced emissions without compromising performance.",
        specs: {
          "Material": "Aluminum, High-Impact Plastic",
          "Weight": "220 lbs",
          "Power Output": "200 HP",
          "Battery Type": "Lithium-Ion",
          "Warranty": "8 years",
          "Compatibility": "Fits Most Hybrid Vehicles"
        }
      },
      {
        id: 2,
        title: "MLA Universal High-Performance Engine",
        category: "engine",
        price: 1500,
        sku: "MLA-EN-2025",
        image: "images/ezgif.com-gif-maker-2021-11-24T204220.732.webp",
        description: "Designed for versatility, this high-performance engine delivers enhanced horsepower and efficiency for a wide range of vehicles.",
        specs: {
          "Material": "304 Stainless Steel",
          "Weight": "350 lbs",
          "Horsepower": "350 HP",
          "Warranty": "5 years",
          "Compatibility": "Universal Fit for Any Car Model"
        }
      },
      {
        id: 3,
        title: "MLA High-Torque Diesel Engine",
        category: "engine",
        price: 2200,
        sku: "MLA-DT-2027",
        image: "images/Figure-1-Vehicle-engine.webp",
        description: "Engineered for heavy-duty applications, this diesel engine delivers robust torque and endurance for commercial trucks and industrial vehicles.",
        specs: {
          "Material": "Cast Iron",
          "Weight": "960 lbs",
          "Torque": "1200 lb-ft",
          "Fuel Efficiency": "15 MPG",
          "Warranty": "10 years",
          "Compatibility": "Large Trucks & Industrial Vehicles"
        }
      },
      {
        id: 4,
        title: "MLA High-Performance Disc Brakes",
        category: "brakes",
        price: 150,
        sku: "MLA-HPDB-2028",
        image: "images/AdobeStock_591668589___Resized.jpg",
        description: "Engineered for extreme conditions, these disc brakes provide superior stopping power and fade resistance, ideal for high-performance sports cars.",
        specs: {
          "Material": "Carbon Fiber",
          "Diameter": "350 mm",
          "Pad Type": "Ceramic",
          "Warranty": "5 years",
          "Compatibility": "High-Performance Sports Cars"
        }
      },
      {
        id: 5,
        title: "MLA All-Terrain Brake Kit",
        category: "brakes",
        price: 200,
        sku: "MLA-ATBK-2029",
        image: "images/istockphoto-1284268855-612x612.jpg",
        description: "Designed for SUVs and trucks, this brake kit ensures reliable performance across diverse conditions—from muddy trails to urban roads.",
        specs: {
          "Material": "Cast Iron",
          "Diameter": "300 mm",
          "Pad Type": "Semi-Metallic",
          "Warranty": "3 years",
          "Compatibility": "SUVs & Trucks"
        }
      },
      {
        id: 6,
        title: "MLA Advanced Car Dynamo",
        category: "electrical",
        price: 120,
        sku: "MLA-DYN-2030",
        image: "images/car-generator-white-background-done-d-37481007.webp",
        description: "Ensure reliable power generation with this advanced car dynamo, engineered to efficiently convert mechanical energy into electrical energy for uninterrupted performance.",
        specs: {
          "Output": "100 Amp",
          "Voltage": "12V",
          "Material": "Aluminum Alloy",
          "Warranty": "4 years",
          "Compatibility": "Modern Vehicles"
        }
      },
      {
        id: 7,
        title: "MLA High-Capacity Car Battery",
        category: "electrical",
        price: 150,
        sku: "MLA-HCB-2031",
        image: "images/065-powerline-45-435.webp",
        description: "Keep your vehicle running smoothly with our high-capacity car battery designed for long-lasting power and stability in all weather conditions.",
        specs: {
          "Capacity": "75 Ah",
          "Voltage": "12V",
          "Type": "Lead-Acid",
          "Cold Cranking Amps": "800 CCA",
          "Warranty": "5 years",
          "Compatibility": "Universal Fit"
        }
      },
      {
        id: 8,
        title: "MLA Handcrafted Leather Steering Wheel",
        category: "interior",
        price: 20,
        sku: "MLA-HSW-2025",
        image: "images/3580af7009d44c8747202f43a388dd118a76d6b4_original.avif",
        description: "Expertly hand-stitched using premium Italian Nappa leather with contrast stitching and optional carbon fiber accents.",
        specs: {
          "Material": "Italian Nappa Leather",
          "Diameter": "370mm",
          "Options": "Carbon fiber, Alcantara",
          "Warranty": "2 years",
          "Compatibility": "All MLA Models"
        }
      },
      {
        id: 9,
        title: "MLA Adjustable Car Seat Belt",
        category: "interior",
        price: 50,
        sku: "MLA-SB-2033",
        image: "images/3-ptbeltwfullcover_77ec56bd-8521-4cfe-8216-c5060104867f_1024x1024.webp",
        description: "A robust and comfortable adjustable car seat belt designed to meet safety regulations while ensuring ease of use and universal compatibility.",
        specs: {
          "Material": "Nylon Webbing",
          "Length": "Adjustable up to 120 cm",
          "Width": "48 mm",
          "Lock Type": "Retractable Buckle",
          "Warranty": "5 years",
          "Compatibility": "Universal Fit"
        }
      }
    ];
  
    const partsGrid = document.querySelector('.parts-grid');
    const categoryTabs = document.querySelectorAll('.tab-btn');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const priceFilter = document.getElementById('priceFilter');
  
    function getActiveCategory() {
      let activeTab = document.querySelector('.tab-btn.active');
      return activeTab ? activeTab.dataset.category : 'all';
    }
  
    function renderParts(category = 'all') {
      partsGrid.innerHTML = '';
      let filteredParts = category === 'all' ? [...partsData] : partsData.filter(part => part.category === category);
      let searchTerm = searchInput.value.trim().toLowerCase();
      if (searchTerm) {
        filteredParts = filteredParts.filter(part =>
          part.title.toLowerCase().includes(searchTerm) ||
          part.description.toLowerCase().includes(searchTerm)
        );
      }
      let priceFilterValue = priceFilter.value;
      if (priceFilterValue === 'under1000') {
        filteredParts = filteredParts.filter(part => part.price < 1000);
      } else if (priceFilterValue === '1000to3000') {
        filteredParts = filteredParts.filter(part => part.price >= 1000 && part.price <= 3000);
      } else if (priceFilterValue === 'above3000') {
        filteredParts = filteredParts.filter(part => part.price > 3000);
      }
      let sortValue = sortSelect.value;
      if (sortValue === 'priceLowHigh') {
        filteredParts.sort((a, b) => a.price - b.price);
      } else if (sortValue === 'priceHighLow') {
        filteredParts.sort((a, b) => b.price - a.price);
      } else if (sortValue === 'nameAZ') {
        filteredParts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortValue === 'nameZA') {
        filteredParts.sort((a, b) => b.title.localeCompare(a.title));
      }
      if (filteredParts.length === 0) {
        partsGrid.innerHTML = '<p class="no-results">No parts found matching your criteria.</p>';
        return;
      }
      filteredParts.forEach(part => {
        let partItem = document.createElement('div');
        partItem.className = 'part-item';
        partItem.dataset.id = part.id;
        partItem.innerHTML = `
              <div class="part-img">
                <img src="${part.image}" alt="${part.title}">
              </div>
              <div class="part-info">
                <span class="part-category">${part.category.charAt(0).toUpperCase() + part.category.slice(1)}</span>
                <h3 class="part-title">${part.title}</h3>
                <p class="part-desc">${part.description}</p>
                <div class="part-price">$${part.price.toLocaleString()}</div>
                <div class="part-meta">
                  <span class="part-sku">SKU: ${part.sku}</span>
                  <a href="#" class="view-details">View Details</a>
                </div>
              </div>
            `;
        partsGrid.appendChild(partItem);
      });
      document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function(e) {
          e.preventDefault();
          let partId = parseInt(this.closest('.part-item').dataset.id);
          openPartModal(partId);
        });
      });
    }
  
    renderParts();
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        categoryTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        renderParts(this.dataset.category);
      });
    });
    searchInput.addEventListener('input', () => renderParts(getActiveCategory()));
    sortSelect.addEventListener('change', () => renderParts(getActiveCategory()));
    priceFilter.addEventListener('change', () => renderParts(getActiveCategory()));
  
    /***********************
     * PART DETAILS MODAL
     ***********************/
    let partModal = document.getElementById('partModal');
    let partModalOverlay = partModal.querySelector('.modal-overlay');
    let partModalClose = partModal.querySelector('.modal-close');
  
    function openPartModal(partId) {
      let part = partsData.find(p => p.id === partId);
      if (!part) return;
      let modalBody = partModal.querySelector('.modal-body');
      modalBody.innerHTML = `
            <div class="modal-img">
              <img src="${part.image}" alt="${part.title}">
            </div>
            <div class="modal-info">
              <h2>${part.title}</h2>
              <div class="modal-price">$${part.price.toLocaleString()}</div>
              <span class="modal-sku">SKU: ${part.sku}</span>
              <p class="modal-desc">${part.description}</p>
              <div class="modal-specs">
                <h4>Specifications</h4>
                <ul>
                  ${Object.entries(part.specs).map(([key, value]) => `
                    <li><span>${key}:</span> <span>${value}</span></li>
                  `).join('')}
                </ul>
              </div>
              <div class="modal-actions">
                <button class="btn btn-primary add-to-cart-btn" data-id="${part.id}" style="background-color: #d4af37; color: #ffffff;">
                  <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
              </div>
            </div>
          `;
      document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
        let partId = parseInt(this.getAttribute('data-id'));
        addToCart(partId);
      });
      partModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  
    function closePartModal() {
      partModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  
    partModalOverlay.addEventListener('click', closePartModal);
    partModalClose.addEventListener('click', closePartModal);
    partModal.addEventListener('click', function(e) {
      if (e.target === partModal) {
        closePartModal();
      }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && partModal.classList.contains('active')) {
        closePartModal();
      }
    });
  
    /***********************
     * SMOOTH SCROLLING FOR ANCHOR LINKS
     ***********************/
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
  
    /***********************
     * HEADER SCROLL SHADOW
     ***********************/
    window.addEventListener('scroll', function() {
      let header = document.querySelector('.luxury-header');
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  
    /***********************
     * CHECKOUT MODAL FUNCTIONALITY & ORDER CONFIRMATION FLOW
     ***********************/
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutBtn = document.querySelector('.btn-checkout');
    const closeCheckoutModal = checkoutModal.querySelector('.modal-close');
    const checkoutForm = document.getElementById('checkoutForm');
    const orderConfirmationModal = document.getElementById("orderConfirmationModal");
    const confirmationCloseBtn = document.getElementById("confirmationClose");
  
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        checkoutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
  
    if (closeCheckoutModal) {
      closeCheckoutModal.addEventListener('click', function() {
        checkoutModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    }
    checkoutModal.addEventListener('click', function(e) {
      if (e.target === checkoutModal) {
        checkoutModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && checkoutModal.classList.contains('active')) {
        checkoutModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
          name: document.getElementById('checkoutName').value,
          email: document.getElementById('checkoutEmail').value,
          phone: document.getElementById('checkoutPhone').value,
          address: document.getElementById('checkoutAddress').value
        };
        document.getElementById('confirmationEmail').textContent = formData.email;
        localStorage.setItem('mlaCart', JSON.stringify([]));
        cart = [];
        updateCartCount();
        updateMiniCart();
        checkoutModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        checkoutForm.reset();
        orderConfirmationModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
  
    if (confirmationCloseBtn && orderConfirmationModal) {
      confirmationCloseBtn.addEventListener("click", function() {
        orderConfirmationModal.classList.remove("active");
        document.body.style.overflow = 'auto';
      });
    }
    if (orderConfirmationModal) {
      orderConfirmationModal.addEventListener("click", function(e) {
        if (e.target === orderConfirmationModal) {
          orderConfirmationModal.classList.remove("active");
          document.body.style.overflow = 'auto';
        }
      });
    }
  
    /***********************
     * NEWSLETTER MODAL FUNCTIONALITY
     ***********************/
    let newsletterForm = document.querySelector('.newsletter-form');
    let newsletterModal = document.getElementById('newsletterSuccessModal');
    let closeNewsletterModal = document.getElementById('closeNewsletterModal');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (newsletterModal) {
          newsletterModal.classList.add('active');
        }
        let emailInput = newsletterForm.querySelector('input[type="email"]');
        if (emailInput) {
          emailInput.value = '';
        }
      });
    }
    if (closeNewsletterModal) {
      closeNewsletterModal.addEventListener('click', function() {
        newsletterModal.classList.remove('active');
      });
    }
    if (newsletterModal) {
      newsletterModal.addEventListener('click', function(e) {
        if (e.target === newsletterModal) {
          newsletterModal.classList.remove('active');
        }
      });
    }
  
    // Request Quote Success Modal close functionality
    const requestQuoteSuccessModal = document.getElementById('requestQuoteSuccessModal');
    const closeRequestQuoteSuccessModal = document.getElementById('closeRequestQuoteSuccessModal');
  
    if (closeRequestQuoteSuccessModal) {
      closeRequestQuoteSuccessModal.addEventListener('click', function(e) {
        e.preventDefault();
        requestQuoteSuccessModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    }
  
    // Also allow closing the Request Quote Success Modal by clicking the overlay
    if (requestQuoteSuccessModal) {
      requestQuoteSuccessModal.addEventListener('click', function(e) {
        if (e.target === requestQuoteSuccessModal) {
          requestQuoteSuccessModal.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });
    }
  
    /***********************
     * CART FUNCTIONALITY
     ***********************/
    function initializeCart() {
      if (!localStorage.getItem('mlaCart')) {
        localStorage.setItem('mlaCart', JSON.stringify([]));
      }
    }
  
    function updateCartCount() {
      let cartCount = document.querySelector('.cart-count');
      if (cartCount) {
        let currentCart = getCart();
        let totalItems = currentCart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
      }
    }
  
    function addToCart(partId) {
      let part = partsData.find(p => p.id === partId);
      if (!part) return;
      let currentCart = getCart();
      let existingItem = currentCart.find(item => item.id === partId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        currentCart.push({
          id: part.id,
          title: part.title,
          price: part.price,
          image: part.image,
          sku: part.sku,
          quantity: 1
        });
      }
      localStorage.setItem('mlaCart', JSON.stringify(currentCart));
      cart = currentCart;
      updateCartCount();
      updateMiniCart();
      let addButton = document.querySelector('.modal-actions .btn-primary');
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
      let currentCart = getCart();
      let totalItems = currentCart.reduce((sum, item) => sum + item.quantity, 0);
      document.querySelectorAll('.mini-cart-count').forEach(element => {
        element.textContent = totalItems;
      });
      if (miniCartItems) {
        if (totalItems === 0) {
          if (miniCartEmpty) miniCartEmpty.style.display = 'block';
          miniCartItems.style.display = 'none';
          if (miniCartSummary) miniCartSummary.style.display = 'none';
        } else {
          if (miniCartEmpty) miniCartEmpty.style.display = 'none';
          miniCartItems.innerHTML = '';
          miniCartItems.style.display = 'block';
          currentCart.forEach(item => {
            let part = partsData.find(p => p.id === item.id);
            if (part) {
              let miniCartItem = document.createElement('div');
              miniCartItem.className = 'mini-cart-item';
              miniCartItem.innerHTML = `
                    <div class="mini-cart-item-img">
                      <img src="${part.image}" alt="${part.title}">
                    </div>
                    <div class="mini-cart-item-details">
                      <h4 class="mini-cart-item-title">${part.title}</h4>
                      <div class="mini-cart-item-price">$${(part.price * item.quantity).toFixed(2)}</div>
                      <div class="mini-cart-item-qty">Qty: ${item.quantity}</div>
                    </div>
                  `;
              miniCartItems.appendChild(miniCartItem);
            }
          });
          if (miniCartSummary) miniCartSummary.style.display = 'block';
          let subtotalElem = miniCartSummary.querySelector('.mini-cart-subtotal span:last-child');
          if (subtotalElem) {
            let cartSubtotal = currentCart.reduce((sum, item) => {
              let part = partsData.find(p => p.id === item.id);
              return part ? sum + (part.price * item.quantity) : sum;
            }, 0);
            subtotalElem.textContent = `$${cartSubtotal.toFixed(2)}`;
          }
        }
      }
    }
  
    initializeCart();
    updateCartCount();
    updateMiniCart();
  
    /***********************
     * MODAL FUNCTIONALITY FOR REQUEST A QUOTE
     ***********************/
    // Get elements for the Request A Quote modal
    let quoteBtn = document.getElementById('quoteBtn');
    let quoteModal = document.getElementById('quoteModal');
    let quoteModalClose = document.getElementById('quoteModalClose');
    let quoteForm = document.getElementById('quoteForm');
  
    // Open the Request A Quote modal when the Quote button is clicked
    if (quoteBtn && quoteModal) {
      quoteBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("Quote button clicked: opening Request A Quote modal");
        quoteModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
  
    // Close the Request A Quote modal when the X is clicked
    if (quoteModalClose) {
      quoteModalClose.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("Quote modal close button clicked");
        quoteModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    }
  
    // Also close the Request A Quote modal when the overlay is clicked
    const quoteModalOverlay = quoteModal.querySelector('.modal-overlay');
    if (quoteModalOverlay) {
      quoteModalOverlay.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("Quote modal overlay clicked");
        quoteModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    }
  
    // Handle the form submission for Request A Quote
    if (quoteForm) {
      quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log("Quote form submitted");
        // Close the Quote modal
        quoteModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Open the Success modal for Request A Quote
        const requestQuoteSuccessModal = document.getElementById('requestQuoteSuccessModal');
        if (requestQuoteSuccessModal) {
          requestQuoteSuccessModal.classList.add('active');
          console.log("Request Quote Success modal opened");
        }
        quoteForm.reset();
      });
    }
  
    /***********************
     * CALL PARTS SPECIALIST MODAL FUNCTIONALITY
     ***********************/
    let callPartsBtn = document.getElementById('callPartsBtn');
    let callPartsModal = document.getElementById('callPartsModal');
    let callModalClose = document.getElementById('callModalClose');
    let callPartsForm = document.getElementById('callPartsForm');
  
    if (callPartsBtn && callPartsModal) {
      callPartsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        callPartsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
  
    if (callModalClose) {
      callModalClose.addEventListener('click', function() {
        callPartsModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    }
  
    callPartsModal.querySelector('.modal-overlay').addEventListener('click', function() {
      callPartsModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  
    // *** Updated Call Parts Specialist form submit functionality ***
    // Instead of an alert, show the Call Parts Specialist Success Modal
    if (callPartsForm) {
      callPartsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        callPartsForm.reset();
        callPartsModal.classList.remove('active');
        const callPartsSuccessModal = document.getElementById('callPartsSuccessModal');
        if (callPartsSuccessModal) {
          callPartsSuccessModal.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
      });
    }
  
    // Close functionality for Call Parts Specialist Success Modal
    const closeCallPartsSuccessModal = document.getElementById('closeCallPartsSuccessModal');
    const callPartsSuccessModal = document.getElementById('callPartsSuccessModal');
    if (closeCallPartsSuccessModal) {
      closeCallPartsSuccessModal.addEventListener('click', function(e) {
        e.preventDefault();
        callPartsSuccessModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    }
    if (callPartsSuccessModal) {
      callPartsSuccessModal.addEventListener('click', function(e) {
        if (e.target === callPartsSuccessModal) {
          callPartsSuccessModal.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });
    }
  
    /***********************
     * CONTACT US MODAL FUNCTIONALITY
     ***********************/
    let contactUsBtn = document.getElementById('contactUsBtn');
    let contactUsOverlay = document.getElementById('contactUsOverlay');
    let closeContactUsBtn = document.getElementById('closeContactUsBtn');
    let contactUsForm = document.getElementById('contactUsForm');
  
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
  
    /***********************
     * BOOK APPOINTMENT MODAL FUNCTIONALITY
     ***********************/
    let bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
    let bookAppointmentOverlay = document.getElementById('bookAppointmentOverlay');
    let closeBookAppointmentBtn = document.getElementById('closeBookAppointmentBtn');
    let bookAppointmentForm = document.getElementById('bookAppointmentForm');
  
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
    
  });
  