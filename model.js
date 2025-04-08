// Car data with specifications
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
    },
    {
        id: 4,
        brand: "bmw",
        name: "BMW M5",
        price: "$105,000",
        image: "./images/BMW M5.jpg",
        type: "luxury",
        specs: {
            engine: "V8 Twin-Turbo",
            horsepower: "600 HP",
            acceleration: "3.2s 0-60 mph",
            topspeed: "190 mph",
            seats: "5",
            description: "The perfect blend of luxury and performance in a sedan package."
        }
    },
    {
        id: 5,
        brand: "mercedes",
        name: "Mercedes-Benz S-Class",
        price: "$115,000",
        image: "./images/mercedes-benz s-class.jpg",
        type: "luxury",
        specs: {
            engine: "V8 Biturbo",
            horsepower: "496 HP",
            acceleration: "4.5s 0-60 mph",
            topspeed: "155 mph",
            seats: "5",
            description: "The epitome of luxury with cutting-edge technology and comfort."
        }
    },
    {
        id: 6,
        brand: "porsche",
        name: "Porsche 911 Turbo S",
        price: "$205,000",
        image: "./images/porshe.jpg",
        type: "sport",
        specs: {
            engine: "Flat-6 Twin-Turbo",
            horsepower: "640 HP",
            acceleration: "2.6s 0-60 mph",
            topspeed: "205 mph",
            seats: "4",
            description: "The iconic 911 Turbo S combines everyday usability with track-ready performance."
        }
    },
    {
        id: 7,
        brand: "tesla",
        name: "Tesla Cybertruck",
        price: "$70,000",
        image: "./images/tesla cybertruck.jpg",
        type: "electric",
        specs: {
            engine: "Dual or Triple Motor",
            horsepower: "800+ HP",
            acceleration: "2.9s 0-60 mph",
            topspeed: "180 mph",
            range: "500+ miles",
            seats: "6",
            description: "With its radical angular design, the Cybertruck redefines what a pickup truck can be."
        }
    },
    {
        id: 8,
        brand: "ferrari",
        name: "Ferrari Roma",
        price: "$225,000",
        image: "./images/ferrari roma .jpg",
        type: "luxury",
        specs: {
            engine: "V8 Twin-Turbo",
            horsepower: "612 HP",
            acceleration: "3.4s 0-60 mph",
            topspeed: "199 mph",
            seats: "2",
            description: "The Roma represents Ferrari's interpretation of the grand touring concept."
        }
    }
];

document.addEventListener("DOMContentLoaded", function () {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Logo animation
    setTimeout(() => {
        document.querySelector(".logo-container").style.opacity = "0";
        
        setTimeout(() => {
            document.querySelector(".logo-container").style.display = "none";
            document.querySelector(".main-content").style.display = "block";
            document.querySelector(".main-footer").style.display = "block";
            document.querySelector(".main-content").classList.add("fade-in");
            
            // Initialize all car functionality
            initializeCarFeatures();
        }, 300);
    }, 2000);

    function initializeCarFeatures() {
        // Display all cars initially
        displayCars(cars);

        // Populate comparison dropdowns
        populateComparisonDropdowns();

        // Search functionality
        document.getElementById('search-btn').addEventListener('click', searchCars);
        document.getElementById('search-input').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') searchCars();
        });
        
        // Mobile search
        if (document.getElementById('mobile-search-btn')) {
            document.getElementById('mobile-search-btn').addEventListener('click', searchCarsMobile);
            document.getElementById('mobile-search-input').addEventListener('keyup', function(e) {
                if (e.key === 'Enter') searchCarsMobile();
            });
        }

        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                filterCars(this.dataset.filter);
            });
        });
        
        // Mobile filter buttons
        document.querySelectorAll('.mobile-filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.mobile-filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                filterCars(this.dataset.filter);
                toggleMobileMenu(); // Close the menu after filtering
            });
        });

        // Sort functionality
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                sortCars(this.dataset.sort);
                document.querySelector('.sort-dropdown-content').classList.remove('show');
            });
        });

        // Brand selection
        document.querySelectorAll('.brand-box').forEach(box => {
            box.addEventListener('click', function() {
                const brand = this.dataset.brand;
                filterByBrand(brand);
            });
        });

        // Compare functionality
        document.getElementById('compare-btn').addEventListener('click', compareCars);
        
        // Reset functionality
        document.getElementById('reset-btn').addEventListener('click', resetComparison);

        // Favorites functionality
        document.getElementById('show-favorites-btn').addEventListener('click', showFavorites);
        document.getElementById('back-to-main-btn').addEventListener('click', hideFavorites);
        
        // Mobile favorites button
        if (document.querySelector('.mobile-favorites-btn')) {
            document.querySelector('.mobile-favorites-btn').addEventListener('click', function() {
                showFavorites();
                toggleMobileMenu(); // Close the menu after showing favorites
            });
        }

       // Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.add('show');
    document.body.style.overflow = 'hidden';
});

document.querySelector('.mobile-close-btn').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.remove('show');
    document.body.style.overflow = '';
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-btn') && document.querySelector('.mobile-menu').classList.contains('show')) {
        document.querySelector('.mobile-menu').classList.remove('show');
        document.body.style.overflow = '';
    }
});

        // Sort dropdown (for desktop)
        const sortDropdownBtn = document.querySelector('.sort-dropdown-btn');
        if (sortDropdownBtn) {
            sortDropdownBtn.addEventListener('click', function() {
                document.querySelector('.sort-dropdown-content').classList.toggle('show');
            });
        }

        // Test drive form (CTA button)
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', function() {
                showTestDriveForm();
            });
        }

        // Close sort dropdown when clicking outside
        window.addEventListener('click', function(e) {
            if (!e.target.matches('.sort-dropdown-btn') && !e.target.closest('.sort-dropdown-content')) {
                const dropdowns = document.querySelectorAll('.sort-dropdown-content');
                dropdowns.forEach(dropdown => {
                    if (dropdown.classList.contains('show')) {
                        dropdown.classList.remove('show');
                    }
                });
            }
        });
        
        // Back to top button
        const backToTopBtn = document.getElementById('back-to-top');
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Add header shadow on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.pageYOffset > 50) {
                header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                header.style.background = 'rgba(26,26,26,0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.boxShadow = 'none';
                header.style.background = 'var(--background-lighter)';
                header.style.backdropFilter = 'none';
            }
        });
        
        // Scroll animations for sections
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.feature-card, .testimonial, .comparison-section, .car-item').forEach(element => {
            element.style.opacity = '0';
            observer.observe(element);
        });
    }
    
    function toggleMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('show');
        
        // Prevent body scrolling when menu is open
        if (mobileMenu.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    function searchCarsMobile() {
        const searchTerm = document.getElementById('mobile-search-input').value;
        document.getElementById('search-input').value = searchTerm;
        searchCars();
        toggleMobileMenu(); // Close the menu after search
    }

    // Display cars in the container
    function displayCars(carsToDisplay, containerElement = null, isFavoritesView = false) {
        const container = containerElement || document.getElementById('car-container');
        container.innerHTML = '';
        
        if (isFavoritesView && carsToDisplay.length === 0) {
            container.innerHTML = `
                <div class="favorites-empty">
                    <i class="fas fa-heart" style="font-size: 40px; opacity: 0.3; margin-bottom: 20px;"></i>
                    <p>You haven't added any favorites yet</p>
                    <p style="margin-top: 10px; font-size: 0.9em;">Click the heart icon on any car to add it to your favorites</p>
                </div>
            `;
            return;
        }
        
        if (carsToDisplay.length === 0) {
            container.innerHTML = `
                <div style="width: 100%; text-align: center; padding: 50px 20px;">
                    <i class="fas fa-search" style="font-size: 40px; opacity: 0.3; margin-bottom: 20px;"></i>
                    <h3 style="font-size: 1.5em; margin-bottom: 10px;">No cars found</h3>
                    <p style="color: var(--text-muted);">Try adjusting your search or filters</p>
                </div>
            `;
            return;
        }

        carsToDisplay.forEach(car => {
            const carElement = document.createElement('div');
            carElement.className = `car-item ${isFavoritesView ? 'favorites-view' : ''}`;
            carElement.dataset.brand = car.brand;
            carElement.dataset.type = car.type;
            
            let typeClass = '';
            let typeText = '';
            switch(car.type) {
                case 'sport': typeClass = 'type-sport'; typeText = 'Sport'; break;
                case 'electric': typeClass = 'type-electric'; typeText = 'Electric'; break;
                case 'luxury': typeClass = 'type-luxury'; typeText = 'Luxury'; break;
            }
            
            const favorites = JSON.parse(localStorage.getItem('favoriteCars') || '[]');
            const isFavorited = favorites.includes(car.id);
            
            if (isFavoritesView) {
                // Simplified view for favorites section
                carElement.innerHTML = `
                    <div class="car-item-inner">
                        <div class="car-item-front">
                            <div class="car-image">
                                <img src="${car.image}" alt="${car.name}">
                            </div>
                            <div class="car-info">
                                <h3>${car.name}</h3>
                                <p class="car-price">${car.price}</p>
                                <span class="car-type ${typeClass}">${typeText}</span>
                                <div class="favorite-badge">
                                    <i class="fas fa-heart"></i> Favorite
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // Normal view with flip animation
                carElement.innerHTML = `
                    <div class="car-item-inner">
                        <div class="car-item-front">
                            <div class="car-image">
                                <img src="${car.image}" alt="${car.name}">
                            </div>
                            <div class="car-info">
                                <h3>${car.name}</h3>
                                <p class="car-price">${car.price}</p>
                                <span class="car-type ${typeClass}">${typeText}</span>
                            </div>
                        </div>
                        <div class="car-item-back">
                            <div class="favorite-toggle ${isFavorited ? 'favorited' : ''}" data-car-id="${car.id}">
                                <i class="${isFavorited ? 'fas' : 'far'} fa-heart"></i>
                            </div>
                            <h3>${car.name}</h3>
                            <div class="car-specs">
                                ${Object.entries(car.specs).map(([key, value]) => 
                                    key !== 'description' ? 
                                    `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>` :
                                    ''
                                ).join('')}
                                <p class="car-description" style="margin-top: 15px; font-style: italic;">
                                    "${car.specs.description}"
                                </p>
                            </div>
                            <button class="view-details-btn" data-car-id="${car.id}">View Details</button>
                        </div>
                    </div>
                `;
            }
            
            container.appendChild(carElement);
        });

        if (!isFavoritesView) {
            // Add event listeners to favorite toggles and view details buttons
            document.querySelectorAll('.favorite-toggle').forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const carId = parseInt(this.dataset.carId);
                    toggleFavorite(carId, this);
                });
            });
            
            document.querySelectorAll('.view-details-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const carId = parseInt(this.dataset.carId);
                    showCarDetails(carId);
                });
            });
        }
    }

    function populateComparisonDropdowns() {
        const select1 = document.getElementById('car1-select');
        const select2 = document.getElementById('car2-select');
        
        select1.innerHTML = '<option value="">Select first car</option>';
        select2.innerHTML = '<option value="">Select second car</option>';
        
        cars.forEach(car => {
            const option1 = document.createElement('option');
            option1.value = car.id;
            option1.textContent = car.name;
            
            const option2 = document.createElement('option');
            option2.value = car.id;
            option2.textContent = car.name;
            
            select1.appendChild(option1);
            select2.appendChild(option2);
        });
    }

    function searchCars() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        if (!searchTerm) {
            displayCars(cars);
            return;
        }
        
        const filteredCars = cars.filter(car => 
            car.name.toLowerCase().includes(searchTerm) || 
            car.brand.toLowerCase().includes(searchTerm) ||
            car.type.toLowerCase().includes(searchTerm) ||
            Object.values(car.specs).some(spec => 
                typeof spec === 'string' && spec.toLowerCase().includes(searchTerm)
            )
        );
        
        displayCars(filteredCars);
        
        // Scroll to car listings
        document.getElementById('car-listings').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    function filterCars(type) {
        if (type === 'all') {
            displayCars(cars);
            return;
        }
        
        const filteredCars = cars.filter(car => car.type === type);
        displayCars(filteredCars);
    }

    function filterByBrand(brand) {
        const filteredCars = cars.filter(car => car.brand === brand);
        displayCars(filteredCars);
        
        // Scroll to car listings
        document.getElementById('car-listings').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    function sortCars(sortType) {
        const carsToSort = [...cars]; // Create a copy of the array
        
        if (sortType === 'price-asc') {
            carsToSort.sort((a, b) => {
                const priceA = parseInt(a.price.replace(/\D/g, ''));
                const priceB = parseInt(b.price.replace(/\D/g, ''));
                return priceA - priceB;
            });
        } else if (sortType === 'price-desc') {
            carsToSort.sort((a, b) => {
                const priceA = parseInt(a.price.replace(/\D/g, ''));
                const priceB = parseInt(b.price.replace(/\D/g, ''));
                return priceB - priceA;
            });
        }
        
        displayCars(carsToSort);
    }

    function toggleFavorite(carId, toggleElement) {
        let favorites = JSON.parse(localStorage.getItem('favoriteCars') || '[]');
        const index = favorites.indexOf(carId);
        
        if (index === -1) {
            // Add to favorites
            favorites.push(carId);
            localStorage.setItem('favoriteCars', JSON.stringify(favorites));
            
            // Update UI
            toggleElement.classList.add('favorited');
            toggleElement.querySelector('i').classList.remove('far');
            toggleElement.querySelector('i').classList.add('fas');
            
            // Show notification
            showNotification(`Car added to favorites!`, 'success');
        } else {
            // Remove from favorites
            favorites.splice(index, 1);
            localStorage.setItem('favoriteCars', JSON.stringify(favorites));
            
            // Update UI
            toggleElement.classList.remove('favorited');
            toggleElement.querySelector('i').classList.remove('fas');
            toggleElement.querySelector('i').classList.add('far');
            
            // Show notification
            showNotification(`Car removed from favorites`, 'error');
        }
        
        // If in favorites view, refresh the display
        if (document.querySelector('.favorites-section:not(.hidden)')) {
            showFavorites();
        }
    }

    function showFavorites() {
        const favorites = JSON.parse(localStorage.getItem('favoriteCars') || '[]');
        const favoriteCars = cars.filter(car => favorites.includes(car.id));
        
        document.querySelector('.car-details-section').classList.add('hidden');
        document.querySelector('.favorites-section').classList.remove('hidden');
        
        displayCars(favoriteCars, document.getElementById('favorites-container'), true);
    }

    function hideFavorites() {
        document.querySelector('.favorites-section').classList.add('hidden');
        document.querySelector('.car-details-section').classList.remove('hidden');
        
        // Reset filter active state
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
        
        displayCars(cars); // Refresh main view
    }

    function compareCars() {
        const car1Id = document.getElementById('car1-select').value;
        const car2Id = document.getElementById('car2-select').value;
        
        if (!car1Id || !car2Id) {
            showNotification('Please select two cars to compare', 'error');
            return;
        }
        
        const car1 = cars.find(c => c.id == car1Id);
        const car2 = cars.find(c => c.id == car2Id);
        
        const resultsContainer = document.getElementById('comparison-results');
        resultsContainer.style.display = 'block';
        
        // Get all possible spec keys from both cars
        const allSpecs = new Set();
        Object.keys(car1.specs).forEach(key => allSpecs.add(key));
        Object.keys(car2.specs).forEach(key => allSpecs.add(key));
        
        // Place description at the end
        const sortedSpecs = Array.from(allSpecs).filter(key => key !== 'description');
        if (allSpecs.has('description')) sortedSpecs.push('description');
        
        resultsContainer.innerHTML = `
            <h3>Comparison: ${car1.name} vs ${car2.name}</h3>
            <div class="comparison-images">
                <div class="comparison-car">
                    <img src="${car1.image}" alt="${car1.name}">
                    <h4>${car1.name}</h4>
                </div>
                <div class="comparison-car">
                    <img src="${car2.image}" alt="${car2.name}">
                    <h4>${car2.name}</h4>
                </div>
            </div>
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>${car1.name}</th>
                        <th>${car2.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Price</strong></td>
                        <td class="car-price">${car1.price}</td>
                        <td class="car-price">${car2.price}</td>
                    </tr>
                    <tr>
                        <td><strong>Type</strong></td>
                        <td>${car1.type.charAt(0).toUpperCase() + car1.type.slice(1)}</td>
                        <td>${car2.type.charAt(0).toUpperCase() + car2.type.slice(1)}</td>
                    </tr>
                    ${sortedSpecs.map(key => {
                        // Highlight differences
                        const isDifferent = car1.specs[key] !== car2.specs[key];
                        const diffClass = isDifferent ? 'difference' : '';
                        
                        if (key === 'description') {
                            return `
                                <tr>
                                    <td><strong>${key.charAt(0).toUpperCase() + key.slice(1)}</strong></td>
                                    <td>${car1.specs[key] || 'N/A'}</td>
                                    <td>${car2.specs[key] || 'N/A'}</td>
                                </tr>
                            `;
                        } else {
                            return `
                                <tr>
                                    <td><strong>${key.charAt(0).toUpperCase() + key.slice(1)}</strong></td>
                                    <td class="${diffClass}">${car1.specs[key] || 'N/A'}</td>
                                    <td class="${diffClass}">${car2.specs[key] || 'N/A'}</td>
                                </tr>
                            `;
                        }
                    }).join('')}
                </tbody>
            </table>
            <div class="comparison-actions">
                <button class="request-quote-btn">Request Quote for Both</button>
            </div>
        `;
        
        // Add event listener to the request quote button
        const requestBtn = resultsContainer.querySelector('.request-quote-btn');
        if (requestBtn) {
            requestBtn.addEventListener('click', () => {
                showTestDriveForm(`${car1.name} & ${car2.name}`);
            });
        }
        
        // Scroll to comparison results
        resultsContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    function resetComparison() {
        document.getElementById('car1-select').value = "";
        document.getElementById('car2-select').value = "";
        document.getElementById('comparison-results').style.display = "none";
    }
    
    function showCarDetails(carId) {
        const car = cars.find(c => c.id === carId);
        if (!car) return;
        
        // Create modal for car details
        const modal = document.createElement('div');
        modal.className = 'detail-modal';
        
        let specsList = '';
        for (const [key, value] of Object.entries(car.specs)) {
            if (key !== 'description') {
                specsList += `<li><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</li>`;
            }
        }
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <h2>${car.name}</h2>
                    <span class="car-price">${car.price}</span>
                </div>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${car.image}" alt="${car.name}">
                    </div>
                    <div class="modal-info">
                        <p class="car-description">${car.specs.description}</p>
                        <div class="car-specs-list">
                            <h3>Specifications</h3>
                            <ul>
                                ${specsList}
                            </ul>
                        </div>
                        <div class="modal-actions">
                            <button class="test-drive-btn" data-car-id="${car.id}">Schedule Test Drive</button>
                            <button class="add-favorite-btn ${JSON.parse(localStorage.getItem('favoriteCars') || '[]').includes(car.id) ? 'favorited' : ''}" data-car-id="${car.id}">
                                <i class="${JSON.parse(localStorage.getItem('favoriteCars') || '[]').includes(car.id) ? 'fas' : 'far'} fa-heart"></i> 
                                ${JSON.parse(localStorage.getItem('favoriteCars') || '[]').includes(car.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Modal animation
        setTimeout(() => {
            modal.querySelector('.modal-content').style.opacity = '1';
            modal.querySelector('.modal-content').style.transform = 'translateY(0)';
        }, 10);
        
        // Close modal
        modal.querySelector('.close-modal').addEventListener('click', () => {
            closeModal(modal);
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
        
        // Add event listeners for buttons
        modal.querySelector('.test-drive-btn').addEventListener('click', () => {
            closeModal(modal);
            showTestDriveForm(car.name);
        });
        
        const favBtn = modal.querySelector('.add-favorite-btn');
        favBtn.addEventListener('click', function() {
            const carId = parseInt(this.dataset.carId);
            let favorites = JSON.parse(localStorage.getItem('favoriteCars') || '[]');
            const index = favorites.indexOf(carId);
            
            if (index === -1) {
                // Add to favorites
                favorites.push(carId);
                localStorage.setItem('favoriteCars', JSON.stringify(favorites));
                
                // Update button
                this.classList.add('favorited');
                this.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
                
                showNotification(`${car.name} added to favorites!`, 'success');
            } else {
                // Remove from favorites
                favorites.splice(index, 1);
                localStorage.setItem('favoriteCars', JSON.stringify(favorites));
                
                // Update button
                this.classList.remove('favorited');
                this.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
                
                showNotification(`${car.name} removed from favorites`, 'error');
            }
        });
        
        // Add escaped key to close
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.querySelector('.detail-modal')) {
                closeModal(document.querySelector('.detail-modal'));
            }
        });
        
        // Add CSS for modal
        if (!document.getElementById('modal-styles')) {
            const style = document.createElement('style');
            style.id = 'modal-styles';
            style.textContent = `
                .detail-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    padding: 20px;
                }
                
                .modal-content {
                    background-color: #222;
                    border-radius: 10px;
                    max-width: 900px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.3s ease;
                }
                
                .close-modal {
                    position: absolute;
                    top: 15px;
                    right: 20px;
                    font-size: 28px;
                    cursor: pointer;
                    z-index: 10;
                    color: #fff;
                    transition: color 0.2s;
                }
                
                .close-modal:hover {
                    color: var(--primary-color);
                }
                
                .modal-header {
                    padding: 20px 30px;
                    border-bottom: 1px solid #333;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .modal-header h2 {
                    margin: 0;
                    font-size: 1.8rem;
                }
                
                .modal-body {
                    display: flex;
                    flex-direction: column;
                }
                
                .modal-image {
                    width: 100%;
                    height: 300px;
                    overflow: hidden;
                }
                
                .modal-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .modal-info {
                    padding: 30px;
                }
                
                .car-description {
                    margin-bottom: 20px;
                    font-size: 1.1rem;
                    line-height: 1.6;
                }
                
                .car-specs-list {
                    margin-bottom: 30px;
                }
                
                .car-specs-list h3 {
                    margin-bottom: 15px;
                    position: relative;
                    display: inline-block;
                }
                
                .car-specs-list h3:after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background-color: var(--primary-color);
                }
                
                .car-specs-list ul {
                    list-style: none;
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 10px;
                }
                
                .car-specs-list li {
                    margin-bottom: 10px;
                }
                
                .modal-actions {
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                }
                
                .test-drive-btn, .add-favorite-btn {
                    padding: 12px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: 600;
                    flex: 1;
                    min-width: 200px;
                    transition: all 0.3s ease;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                }
                
                .test-drive-btn {
                    background-color: var(--primary-color);
                    color: black;
                }
                
                .test-drive-btn:hover {
                    background-color: #ff8c00;
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }
                
                .add-favorite-btn {
                    background-color: #444;
                    color: white;
                }
                
                .add-favorite-btn:hover {
                    background-color: #555;
                    transform: translateY(-3px);
                }
                
                .add-favorite-btn.favorited {
                    background-color: var(--heart-color);
                }
                
                @media (min-width: 768px) {
                    .modal-body {
                        flex-direction: row;
                    }
                    
                    .modal-image {
                        width: 40%;
                        height: auto;
                    }
                    
                    .modal-info {
                        width: 60%;
                    }
                }
                
                @media (max-width: 767px) {
                    .modal-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 10px;
                    }
                    
                    .modal-actions {
                        flex-direction: column;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    function closeModal(modal) {
        modal.querySelector('.modal-content').style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = ''; // Re-enable scrolling
        }, 300);
    }
    
    function showTestDriveForm(carName = '') {
        // Create modal for test drive form
        const modal = document.createElement('div');
        modal.className = 'detail-modal';
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <h2>Schedule a Test Drive</h2>
                </div>
                <div class="modal-body">
                    <form id="test-drive-form" class="test-drive-form">
                        <div class="form-group">
                            <label for="car-selection">Vehicle of Interest</label>
                            <input type="text" id="car-selection" value="${carName}" placeholder="Select a vehicle" ${carName ? 'readonly' : ''}>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="first-name">First Name*</label>
                                <input type="text" id="first-name" required>
                            </div>
                            <div class="form-group">
                                <label for="last-name">Last Name*</label>
                                <input type="text" id="last-name" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="email">Email*</label>
                                <input type="email" id="email" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone*</label>
                                <input type="tel" id="phone" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="preferred-date">Preferred Date</label>
                            <input type="date" id="preferred-date">
                        </div>
                        <div class="form-group">
                            <label for="comments">Comments</label>
                            <textarea id="comments" rows="3" placeholder="Any specific questions or requirements?"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="checkbox-container">
                                <input type="checkbox" id="consent" required>
                                <span class="checkmark"></span>
                                I consent to being contacted about my test drive request
                            </label>
                        </div>
                        <button type="submit" class="submit-btn">Submit Request</button>
                    </form>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Modal animation
        setTimeout(() => {
            modal.querySelector('.modal-content').style.opacity = '1';
            modal.querySelector('.modal-content').style.transform = 'translateY(0)';
        }, 10);
        
        // Close modal
        modal.querySelector('.close-modal').addEventListener('click', () => {
            closeModal(modal);
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
        
        // Form submission
        modal.querySelector('#test-drive-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Normally would submit to server, but for demo just show success message
            showNotification('Your test drive request has been submitted!', 'success');
            closeModal(modal);
        });
        
        // Add CSS for form
        if (!document.getElementById('form-styles')) {
            const style = document.createElement('style');
            style.id = 'form-styles';
            style.textContent = `
                .test-drive-form {
                    padding: 20px;
                }
                
                .form-group {
                    margin-bottom: 20px;
                }
                
                .form-row {
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                }
                
                .form-row .form-group {
                    flex: 1;
                    min-width: 200px;
                }
                
                .test-drive-form label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                }
                
                .test-drive-form input,
                .test-drive-form textarea,
                .test-drive-form select {
                    width: 100%;
                    padding: 12px 15px;
                    border: 1px solid #444;
                    border-radius: 5px;
                    background-color: #333;
                    color: white;
                    font-family: inherit;
                    font-size: 16px;
                }
                
                .test-drive-form input:focus,
                .test-drive-form textarea:focus,
                .test-drive-form select:focus {
                    border-color: var(--primary-color);
                    outline: none;
                }
                
                .checkbox-container {
                    display: flex;
                    align-items: flex-start;
                    cursor: pointer;
                    position: relative;
                    padding-left: 35px;
                    user-select: none;
                    line-height: 1.6;
                }
                
                .checkbox-container input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                }
                
                .checkmark {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 22px;
                    width: 22px;
                    background-color: #333;
                    border: 1px solid #444;
                    border-radius: 4px;
                }
                
                .checkbox-container:hover input ~ .checkmark {
                    background-color: #444;
                }
                
                .checkbox-container input:checked ~ .checkmark {
                    background-color: var(--primary-color);
                    border-color: var(--primary-color);
                }
                
                .checkmark:after {
                    content: "";
                    position: absolute;
                    display: none;
                }
                
                .checkbox-container input:checked ~ .checkmark:after {
                    display: block;
                }
                
                .checkbox-container .checkmark:after {
                    left: 8px;
                    top: 4px;
                    width: 5px;
                    height: 10px;
                    border: solid white;
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                }
                
                .submit-btn {
                    background-color: var(--primary-color);
                    color: black;
                    border: none;
                    padding: 15px 25px;
                    font-size: 16px;
                    font-weight: 600;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: block;
                    width: 100%;
                }
                
                .submit-btn:hover {
                    background-color: #ff8c00;
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }
                
                input[readonly] {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Toast notification system
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icon = type === 'success' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-circle"></i>';
        
        notification.innerHTML = `
            ${icon}
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Remove any existing notification
        const existingNotifications = document.querySelectorAll('.notification');
        if (existingNotifications.length > 1) {
            existingNotifications.forEach((notif, index) => {
                if (index === 0) return;
                notif.remove();
            });
        }
        
        // Remove notification after animation completes
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    // Add CSS for fade-in animation
    const fadeInStyle = document.createElement('style');
    fadeInStyle.textContent = `
        .fade-in {
            opacity: 0;
            animation: fadeInAnimation 0.8s ease forwards;
        }
        
        @keyframes fadeInAnimation {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .comparison-images {
            display: flex;
            gap: 30px;
            margin: 30px 0;
            justify-content: center;
        }
        
        .comparison-car {
            width: 40%;
            max-width: 300px;
            text-align: center;
        }
        
        .comparison-car img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 10px;
        }
        
        .comparison-car h4 {
            margin: 10px 0;
        }
        
        .comparison-actions {
            margin-top: 30px;
            text-align: center;
        }
        
        .request-quote-btn {
            background-color: var(--primary-color);
            color: black;
            border: none;
            padding: 12px 25px;
            border-radius: 5px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .request-quote-btn:hover {
            background-color: #ff8c00;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.15);
        }
        
        .difference {
            color: var(--primary-color);
            font-weight: 500;
        }
    `;
    document.head.appendChild(fadeInStyle);
});


// Video Gallery Variables
const videoSlides = document.querySelectorAll('.video-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const videos = document.querySelectorAll('.gallery-video');
let currentSlide = 0;

// Video Gallery Functions
function showSlide(index) {
  // Hide all slides
  videoSlides.forEach(slide => {
    slide.classList.remove('active');
    const video = slide.querySelector('video');
    if (video) {
      video.pause();
    }
  });
  
  // Deactivate all dots
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Show the current slide and activate corresponding dot
  videoSlides[index].classList.add('active');
  dots[index].classList.add('active');
  
  // Play the video on the active slide
  const activeVideo = videoSlides[index].querySelector('video');
  if (activeVideo) {
    activeVideo.currentTime = 0;
    activeVideo.play();
  }
  
  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % videoSlides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + videoSlides.length) % videoSlides.length;
  showSlide(prev);
}

// Video Gallery Event Listeners
if (nextBtn) {
  nextBtn.addEventListener('click', nextSlide);
}

if (prevBtn) {
  prevBtn.addEventListener('click', prevSlide);
}

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Show the first slide initially and play the video
if (videoSlides.length > 0) {
  showSlide(0);
}

// Add touch support for the video gallery
let touchStartX = 0;
let touchEndX = 0;
const videoCarousel = document.querySelector('.video-carousel');

if (videoCarousel) {
  videoCarousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  videoCarousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
}

function handleSwipe() {
  const swipeThreshold = 50;
  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left -> next slide
    nextSlide();
  } else if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right -> previous slide
    prevSlide();
  }
}

// Auto-advance slides (optional)
// let slideInterval = setInterval(nextSlide, 5000);

// Pause auto-advance when user interacts (optional)
// function pauseSlideShow() {
//   clearInterval(slideInterval);
// }

// videoCarousel.addEventListener('mouseenter', pauseSlideShow);
// videoCarousel.addEventListener('mouseleave', () => {
//   slideInterval = setInterval(nextSlide, 5000);
// });