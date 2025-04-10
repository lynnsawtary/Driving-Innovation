document.addEventListener('DOMContentLoaded', function() {
    // Hamburger toggling for mobile navigation
    let hamburger = document.querySelector('.hamburger');
    let navLinks = document.querySelector('.nav-links');
    
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
    
    // Parts Data
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
    
    // Cart-related DOM elements (if available in your header)
    // (Cart code assumes you have a .cart-count element in your header.)
    
    let partsGrid = document.querySelector('.parts-grid');
    let categoryTabs = document.querySelectorAll('.tab-btn');
    let searchInput = document.querySelector('#searchInput');
    let sortSelect = document.querySelector('#sortSelect');
    let priceFilter = document.querySelector('#priceFilter');
  
    // Helper: Get active category from tab
    function getActiveCategory() {
        let activeTab = document.querySelector('.tab-btn.active');
        return activeTab ? activeTab.dataset.category : 'all';
    }
    
    // Render parts on the page
    function renderParts(category = 'all') {
        partsGrid.innerHTML = '';
        
        let filteredParts = category === 'all' 
            ? [...partsData] 
            : partsData.filter(part => part.category === category);
        
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
    
    searchInput.addEventListener('input', () => {
        renderParts(getActiveCategory());
    });
    
    sortSelect.addEventListener('change', () => {
        renderParts(getActiveCategory());
    });
    
    priceFilter.addEventListener('change', () => {
        renderParts(getActiveCategory());
    });
    
    // -------------------------------
    // PART DETAILS MODAL (View Details)
    // -------------------------------
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
                    <button class="btn btn-primary add-to-cart-btn" data-id="${part.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn btn-secondary"><i class="fas fa-phone"></i> Call to Order</button>
                </div>
            </div>
        `;
        
        document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
            const partId = parseInt(this.getAttribute('data-id'));
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
    
    // Smooth scrolling for anchor links
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
    
    window.addEventListener('scroll', function() {
        let header = document.querySelector('.luxury-header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    let newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let emailInput = this.querySelector('input[type="email"]');
            let email = emailInput.value.trim();
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
    
    // -------------------------------
    // CART FUNCTIONALITY
    // -------------------------------
    
    // Initialize the cart in localStorage if it doesn't exist yet
    function initializeCart() {
        if (!localStorage.getItem('mlaCart')) {
            localStorage.setItem('mlaCart', JSON.stringify([]));
        }
    }
    
    // Retrieve the current cart array from localStorage
    function getCart() {
        return JSON.parse(localStorage.getItem('mlaCart')) || [];
    }
    
    // Update the cart count display in the header
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const cart = getCart();
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            // Optionally hide the count if there are no items:
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }
    
    // Function to add an item (part) to the cart
    function addToCart(partId) {
        const part = partsData.find(p => p.id === partId);
        if (!part) return;
        
        let cart = getCart();
        const existingItem = cart.find(item => item.id === partId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: part.id,
                title: part.title,
                price: part.price,
                image: part.image,
                sku: part.sku,
                quantity: 1
            });
        }
        
        localStorage.setItem('mlaCart', JSON.stringify(cart));
        updateCartCount();
        updateMiniCart();
        
        // Optional: Visual feedback when an item is added
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
    
    // Update the mini-cart (if you have a mini-cart dropdown)
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
                        const part = partsData.find(p => p.id === item.id);
                        if (part) {
                            const miniCartItem = document.createElement('div');
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
                            itemsEl.appendChild(miniCartItem);
                        }
                    });
                }
                
                if (summaryEl) summaryEl.style.display = 'block';
                if (subtotalEl) {
                    const subtotal = cart.reduce((sum, item) => {
                        const part = partsData.find(p => p.id === item.id);
                        return part ? sum + (part.price * item.quantity) : sum;
                    }, 0);
                    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
                }
            }
        });
    }
    
    // When the DOM loads, initialize the cart and update the count
    initializeCart();
    updateCartCount();
    updateMiniCart();
    
    // ------------------------------
    // MODAL FUNCTIONALITY FOR NEW FORMS
    // ------------------------------
    // Call Parts Specialist Modal
    const callPartsBtn = document.getElementById('callPartsBtn');
    const callPartsModal = document.getElementById('callPartsModal');
    const callModalClose = document.getElementById('callModalClose');
    const callPartsForm = document.getElementById('callPartsForm');
    
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
    
    if (callPartsForm) {
        callPartsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your request! An MLA Parts Specialist will contact you shortly.');
            callPartsForm.reset();
            callPartsModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Request a Quote Modal
    const quoteBtn = document.getElementById('quoteBtn');
    const quoteModal = document.getElementById('quoteModal');
    const quoteModalClose = document.getElementById('quoteModalClose');
    const quoteForm = document.getElementById('quoteForm');
    
    if (quoteBtn && quoteModal) {
        quoteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            quoteModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (quoteModalClose) {
        quoteModalClose.addEventListener('click', function() {
            quoteModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    quoteModal.querySelector('.modal-overlay').addEventListener('click', function() {
        quoteModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! We will prepare a personalized quote and get back to you soon.');
            quoteForm.reset();
            quoteModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // ------------------------------
    // END OF MODAL FUNCTIONALITY
    // ------------------------------
});
