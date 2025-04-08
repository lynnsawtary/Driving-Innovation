document.addEventListener('DOMContentLoaded', function() {
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
    
    let partsData = [
        {
            id: 1,
            title: "MLA Performance Exhaust System",
            category: "engine",
            price: 3499,
            sku: "MLA-EX-2025",
            image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
            description: "High-performance stainless steel exhaust system engineered for optimal flow and an aggressive tone.",
            specs: {
                "Material": "304 Stainless Steel",
                "Weight": "28.5 lbs",
                "Power Gain": "+15 HP",
                "Warranty": "5 years",
                "Compatibility": "MLA V8 Models"
            }
        },
        {
            id: 2,
            title: "Carbon Ceramic Brake Kit",
            category: "brakes",
            price: 8999,
            sku: "MLA-CCB-2025",
            image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: "Ultra-high-performance carbon ceramic brakes for track-ready stopping power and reduced unsprung weight.",
            specs: {
                "Rotor Size": "16.5 inches",
                "Pad Material": "Carbon Ceramic",
                "Weight Savings": "22 lbs per corner",
                "Warranty": "3 years",
                "Compatibility": "MLA GT Models"
            }
        },
        {
            id: 3,
            title: "MLA Digital Instrument Cluster",
            category: "electrical",
            price: 2499,
            sku: "MLA-DIC-2025",
            image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: "Fully customizable 12.3-inch digital instrument cluster with multiple display modes and performance telemetry.",
            specs: {
                "Display Size": "12.3 inches",
                "Resolution": "1920x720",
                "Features": "Track mode, Night vision",
                "Warranty": "2 years",
                "Compatibility": "All MLA Models"
            }
        },
        {
            id: 4,
            title: "Handcrafted Leather Steering Wheel",
            category: "interior",
            price: 1299,
            sku: "MLA-HSW-2025",
            image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
            id: 5,
            title: "MLA Billet Aluminum Pedals",
            category: "interior",
            price: 499,
            sku: "MLA-BAP-2025",
            image: "https://images.unsplash.com/photo-1555661537-923633077102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: "CNC-machined aluminum pedals with rubber inserts for improved grip and premium aesthetics.",
            specs: {
                "Material": "Aircraft-grade Aluminum",
                "Finish": "Brushed/Anodized",
                "Includes": "Accelerator, Brake, Dead pedal",
                "Warranty": "2 years",
                "Compatibility": "All MLA Models"
            }
        },
        {
            id: 6,
            title: "MLA Performance Air Intake",
            category: "engine",
            price: 899,
            sku: "MLA-PAI-2025",
            image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: "High-flow cold air intake system with washable performance filter and heat shield.",
            specs: {
                "Filter Type": "Cotton Gauze",
                "Power Gain": "+8 HP",
                "Installation": "Direct bolt-on",
                "Warranty": "2 years",
                "Compatibility": "MLA V8 Models"
            }
        },
        {
            id: 7,
            title: "MLA Carbon Fiber Mirror Caps",
            category: "exterior",
            price: 799,
            sku: "MLA-CFM-2025",
            image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: "Authentic carbon fiber mirror caps with UV-resistant clear coat for durability.",
            specs: {
                "Material": "2x2 Twill Carbon Fiber",
                "Weight": "0.8 lbs each",
                "Finish": "Gloss or Matte",
                "Warranty": "2 years",
                "Compatibility": "All MLA Models"
            }
        },
        {
            id: 8,
            title: "MLA LED Interior Lighting Kit",
            category: "electrical",
            price: 349,
            sku: "MLA-LED-2025",
            image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: "Premium LED lighting kit with customizable colors and brightness for footwells, cup holders, and doors.",
            specs: {
                "Colors": "16.8 million RGB",
                "Control": "Touchscreen or App",
                "Zones": "4 independent",
                "Warranty": "2 years",
                "Compatibility": "All MLA Models"
            }
        }
    ];
    
    let partsGrid = document.querySelector('.parts-grid');
    let categoryTabs = document.querySelectorAll('.tab-btn');
    let searchInput = document.querySelector('#searchInput');
    let sortSelect = document.querySelector('#sortSelect');
    let priceFilter = document.querySelector('#priceFilter');
  
    function getActiveCategory() {
        let activeTab = document.querySelector('.tab-btn.active');
        return activeTab ? activeTab.dataset.category : 'all';
    }
    
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
    
    let partModal = document.querySelector('.part-modal');
    let modalOverlay = document.querySelector('.modal-overlay');
    let modalClose = document.querySelector('.modal-close');
    
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
                    <button class="btn btn-primary"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                    <button class="btn btn-secondary"><i class="fas fa-phone"></i> Call to Order</button>
                </div>
            </div>
        `;
        
        partModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closePartModal() {
        partModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
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
  });
  