document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
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
    
    // Parts data
    let partsData = [
        {
            id: 1,
            title: "MLA Hybrid Electric Engine Module",
            category: "engine",
            price: 4000,
            sku: "MLA-HE-2026",
            image: "images/1-1.jpg",
            description: "The MLA Hybrid Electric Engine Module offers a cutting-edge solution for hybrid vehicles, combining electric power with traditional fuel systems for optimized fuel efficiency and lower emissions. Perfect for an eco-friendly upgrade.",
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
            description: "This MLA Universal Engine is designed for high-performance and versatility, suitable for any car. It delivers enhanced horsepower and efficiency with a durable stainless steel construction.",
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
            description: "Designed for heavy-duty applications, the MLA High-Torque Diesel Engine delivers robust performance and unmatched durability. Ideal for commercial trucks and industrial vehicles, this engine ensures maximum productivity with minimal downtime.",
            specs: {
                "Material": "Cast Iron",
                "Weight": "960 lbs",
                "Torque": "1200 lb-ft",
                "Fuel Efficiency": "15 MPG",
                "Warranty": "10 years",
                "Compatibility": "Designed for Large Trucks and Industrial Vehicles"
            }
        },
        {
            id: 4,
            title: "MLA High-Performance Disc Brakes",
            category: "brakes",
            price: 150,
            sku: "MLA-HPDB-2028",
            image: "images/AdobeStock_591668589___Resized.jpg",
            description: "Engineered for extreme conditions, MLA High-Performance Disc Brakes provide superior stopping power and fade resistance, ideal for sports cars and high-speed driving. Experience enhanced safety and control with our advanced brake technology.",
            specs: {
                "Material": "Carbon Fiber",
                "Diameter": "350 mm",
                "Pad Type": "Ceramic",
                "Warranty": "5 years",
                "Compatibility": "Fits Most High-Performance Sports Cars"
        }
        },
        {
                id: 5,
                title: "MLA All-Terrain Brake Kit",
                category: "brakes",
                price: 200,
                sku: "MLA-ATBK-2029",
                image: "images/istockphoto-1284268855-612x612.jpg",
                description: "MLA All-Terrain Brake Kit is specifically designed for SUVs and trucks, ensuring optimal performance in diverse driving environments from muddy trails to urban roads. This kit enhances braking reliability and durability under tough conditions.",
                specs: {
                    "Material": "Cast Iron",
                    "Diameter": "300 mm",
                    "Pad Type": "Semi-Metallic",
                    "Warranty": "3 years",
                    "Compatibility": "Universal Fit for SUVs and Trucks"
                }
            },
            {
                id: 6,
                title: "MLA Advanced Car Dynamo",
                category: "electrical",
                price: 120,
                sku: "MLA-DYN-2030",
                image: "images/car-generator-white-background-done-d-37481007.webp",
                description: "The MLA Advanced Car Dynamo is designed to ensure reliable power generation for your vehicle's electrical system. Featuring robust construction and advanced magnetic technology, it efficiently converts mechanical energy into electrical energy, keeping your battery charged and your electrical components running smoothly.",
                specs: {
                    "Output": "100 Amp",
                    "Voltage": "12V",
                    "Material": "Aluminum Alloy",
                    "Warranty": "4 years",
                    "Compatibility": "Fits Most Modern Vehicles"
                }
            },
            {
                id: 7,
                title: "MLA High-Capacity Car Battery",
                category: "electrical",
                price: 150,
                sku: "MLA-HCB-2031",
                image: "images/065-powerline-45-435.webp",
                description: "Keep your vehicle starting smoothly and reliably with the MLA High-Capacity Car Battery. Designed for modern vehicles that require robust electrical support, this battery provides long-lasting power and stability in all weather conditions, ensuring that your car is ready to go whenever you are.",
                specs: {
                    "Capacity": "75 Ah",
                    "Voltage": "12V",
                    "Type": "Lead-Acid",
                    "Cold Cranking Amps": "800 CCA",
                    "Warranty": "5 years",
                    "Compatibility": "Universal Fit for Most Cars"
                }
            },
        {
            id: 8,
            title: "Handcrafted Leather Steering Wheel",
            category: "interior",
            price: 20,
            sku: "MLA-HSW-2025",
            image: "images/3580af7009d44c8747202f43a388dd118a76d6b4_original.avif",
            description: "Hand-stitched Nappa leather steering wheel with contrast stitching and optional carbon fiber inserts.",
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
            description: "Ensure your safety with the MLA Adjustable Car Seat Belt, designed for universal compatibility with most car models. This seat belt features a robust locking mechanism and a comfortable, adjustable strap that accommodates all passengers, enhancing safety and comfort during travel.",
            specs: {
                "Material": "Nylon Webbing",
                "Length": "Adjustable up to 120 cm",
                "Width": "48 mm",
                "Lock Type": "Retractable Buckle",
                "Warranty": "5 years",
                "Compatibility": "Universal Fit for Most Car Models"
            }
        },
    ];
    
    // Make partsData available globally for cart.js
    window.partsData = partsData;
    
    // DOM elements
    let partsGrid = document.querySelector('.parts-grid');
    let categoryTabs = document.querySelectorAll('.tab-btn');
    let searchInput = document.querySelector('#searchInput');
    let sortSelect = document.querySelector('#sortSelect');
    let priceFilter = document.querySelector('#priceFilter');
    let partModal = document.querySelector('.part-modal');
    let modalOverlay = document.querySelector('.modal-overlay');
    let modalClose = document.querySelector('.modal-close');
    
    // Initialize cart
    function initializeCart() {
        if (!localStorage.getItem('mlaCart')) {
            localStorage.setItem('mlaCart', JSON.stringify([]));
        }
    }
    
    // Get current cart
    function getCart() {
        return JSON.parse(localStorage.getItem('mlaCart')) || [];
    }
    
    // Update cart count in header
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const cart = getCart();
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }
    
    // Add to cart function
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
        updateMiniCart(); // Add this to update the dropdown after adding an item

        // Show visual feedback
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
    
    // Render parts
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
    
    // Open part modal
    function openPartModal(partId) {
        let part = partsData.find(p => p.id === partId);
        if (!part) return;
        
        let modalBody = document.querySelector('.modal-body');
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
        
        // Add event listener to the Add to Cart button in modal
        document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
            const partId = parseInt(this.getAttribute('data-id'));
            addToCart(partId);
        });
        
        partModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close part modal
    function closePartModal() {
        partModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    // Update mini cart (improved version)
    function updateMiniCart() {
        const cart = JSON.parse(localStorage.getItem('mlaCart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        // Update all mini-cart counts on the page
        document.querySelectorAll('.mini-cart-count').forEach(element => {
            element.textContent = totalItems;
        });
        
        // Get all mini-cart elements
        const miniCartElements = document.querySelectorAll('.mini-cart');
        
        miniCartElements.forEach(miniCart => {
            const emptyEl = miniCart.querySelector('.mini-cart-empty');
            const itemsEl = miniCart.querySelector('.mini-cart-items');
            const summaryEl = miniCart.querySelector('.mini-cart-summary');
            const subtotalEl = miniCart.querySelector('.mini-cart-subtotal span:last-child');
            
            if (totalItems === 0) {
                // Empty cart state
                if (emptyEl) emptyEl.style.display = 'block';
                if (itemsEl) itemsEl.style.display = 'none';
                if (summaryEl) summaryEl.style.display = 'none';
            } else {
                // Has items state
                if (emptyEl) emptyEl.style.display = 'none';
                if (itemsEl) {
                    itemsEl.innerHTML = '';
                    itemsEl.style.display = 'block';
                    
                    // Add items to mini cart
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
// Toggle mini cart dropdown
document.addEventListener('DOMContentLoaded', function() {
    const miniCartTrigger = document.getElementById('mini-cart-trigger');
    const miniCartDropdown = document.getElementById('mini-cart-dropdown');
    
    if (miniCartTrigger && miniCartDropdown) {
        miniCartTrigger.addEventListener('click', function(e) {
            e.stopPropagation();
            miniCartDropdown.classList.toggle('active');
        });
        
        // Close when clicking outside
        document.addEventListener('click', function() {
            miniCartDropdown.classList.remove('active');
        });
        
        // Prevent dropdown from closing when clicking inside it
        miniCartDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Initialize cart
    initializeCart();
    updateCartCount();
    renderParts();
});
    
    
    // Event listeners
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
    
    modalOverlay.addEventListener('click', closePartModal);
    modalClose.addEventListener('click', closePartModal);
    partModal.addEventListener('click', function(e) {
        if (e.target === this) {
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
    
    // Header shadow on scroll
    window.addEventListener('scroll', function() {
        let header = document.querySelector('.luxury-header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // Newsletter form
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
    
    // Helper function to get active category
    function getActiveCategory() {
        let activeTab = document.querySelector('.tab-btn.active');
        return activeTab ? activeTab.dataset.category : 'all';
    }
});