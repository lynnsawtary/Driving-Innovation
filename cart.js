document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart from localStorage or empty array
    let cart = JSON.parse(localStorage.getItem('mlaCart')) || [];
    
    // DOM Elements
    const cartItemsList = document.getElementById('cart-items-list');
    const cartEmpty = document.getElementById('cart-empty');
    const itemCount = document.getElementById('item-count');
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const recommendationsGrid = document.getElementById('recommendations-grid');
    const miniCartCount = document.getElementById('mini-cart-count');
    const miniCartItems = document.getElementById('mini-cart-items');
    const miniCartEmpty = document.getElementById('mini-cart-empty');
    const miniCartSubtotal = document.getElementById('mini-cart-subtotal');
    const miniCartSummary = document.getElementById('mini-cart-summary');
    
    // Hamburger menu functionality (same as parts.js)
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
    
    // Render cart items
    function renderCart() {
        // Update cart count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        itemCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
        
        // Update mini cart count
        miniCartCount.textContent = totalItems;
        
        if (cart.length === 0) {
            // Show empty cart message
            cartEmpty.style.display = 'block';
            cartItemsList.style.display = 'none';
            
            // Mini cart empty state
            miniCartEmpty.style.display = 'block';
            miniCartItems.style.display = 'none';
            miniCartSummary.style.display = 'none';
            
            // Disable checkout button
            checkoutBtn.disabled = true;
        } else {
            // Hide empty cart message
            cartEmpty.style.display = 'none';
            cartItemsList.style.display = 'block';
            
            // Clear existing items
            cartItemsList.innerHTML = '';
            
            // Add each item to the cart
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="cart-item-details">
                        <h3 class="cart-item-title">${item.title}</h3>
                        <div class="cart-item-sku">SKU: ${item.sku}</div>
                        <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString()}</div>
                        <div class="cart-item-actions">
                            <div class="quantity-selector">
                                <button class="quantity-btn minus" data-index="${index}">-</button>
                                <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-index="${index}">
                                <button class="quantity-btn plus" data-index="${index}">+</button>
                            </div>
                            <div class="remove-item" data-index="${index}">
                                <i class="fas fa-trash"></i> Remove
                            </div>
                        </div>
                    </div>
                `;
                cartItemsList.appendChild(cartItem);
            });
            
            // Calculate subtotal
            const cartSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            subtotal.textContent = `$${cartSubtotal.toLocaleString()}`;
            total.textContent = `$${cartSubtotal.toLocaleString()}`;
            
            // Enable checkout button
            checkoutBtn.disabled = false;
            
            // Update mini cart
            updateMiniCart();
        }
        
        // Render recommendations
        renderRecommendations();
    }
    
    // Update mini cart
    function updateMiniCart() {
        if (cart.length === 0) return;
        
        // Clear mini cart items
        miniCartItems.innerHTML = '';
        
        // Add items to mini cart
        cart.forEach(item => {
            const miniCartItem = document.createElement('div');
            miniCartItem.className = 'mini-cart-item';
            miniCartItem.innerHTML = `
                <div class="mini-cart-item-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="mini-cart-item-details">
                    <h4 class="mini-cart-item-title">${item.title}</h4>
                    <div class="mini-cart-item-price">$${(item.price * item.quantity).toLocaleString()}</div>
                    <div class="mini-cart-item-qty">Qty: ${item.quantity}</div>
                </div>
            `;
            miniCartItems.appendChild(miniCartItem);
        });
        
        // Calculate mini cart subtotal
        const cartSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        miniCartSubtotal.textContent = `$${cartSubtotal.toLocaleString()}`;
        
        // Show mini cart items and summary
        miniCartEmpty.style.display = 'none';
        miniCartItems.style.display = 'block';
        miniCartSummary.style.display = 'block';
    }
    
    // Render recommended items
    function renderRecommendations() {
        // Clear existing recommendations
        recommendationsGrid.innerHTML = '';
        
        // Get random 4 parts that aren't already in the cart
        const partsNotInCart = window.partsData.filter(part => 
            !cart.some(item => item.id === part.id)
        ).sort(() => 0.5 - Math.random()).slice(0, 4);
        
        if (partsNotInCart.length === 0) {
            recommendationsGrid.innerHTML = '<p>No recommendations available</p>';
            return;
        }
        
        partsNotInCart.forEach(part => {
            const recommendation = document.createElement('div');
            recommendation.className = 'recommendation-item';
            recommendation.innerHTML = `
                <div class="recommendation-img">
                    <img src="${part.image}" alt="${part.title}">
                </div>
                <div class="recommendation-details">
                    <h3 class="recommendation-title">${part.title}</h3>
                    <div class="recommendation-price">$${part.price.toLocaleString()}</div>
                    <button class="recommendation-btn" data-id="${part.id}">Add to Cart</button>
                </div>
            `;
            recommendationsGrid.appendChild(recommendation);
        });
    }
    
    // Event delegation for quantity changes and removals
    document.addEventListener('click', function(e) {
        // Quantity minus button
        if (e.target.classList.contains('minus')) {
            const index = e.target.dataset.index;
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
                saveCart();
                renderCart();
            }
        }
        
        // Quantity plus button
        if (e.target.classList.contains('plus')) {
            const index = e.target.dataset.index;
            cart[index].quantity++;
            saveCart();
            renderCart();
        }
        
        // Remove item
        if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
            const removeBtn = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
            const index = removeBtn.dataset.index;
            cart.splice(index, 1);
            saveCart();
            renderCart();
        }
        
        // Add recommendation to cart
        if (e.target.classList.contains('recommendation-btn')) {
            const partId = parseInt(e.target.dataset.id);
            addToCart(partId);
        }
    });
    
    // Input change for quantity
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('quantity-input')) {
            const index = e.target.dataset.index;
            const newQuantity = parseInt(e.target.value);
            
            if (newQuantity >= 1) {
                cart[index].quantity = newQuantity;
                saveCart();
                renderCart();
            } else {
                e.target.value = cart[index].quantity; // Reset to previous value
            }
        }
    });
    
    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('mlaCart', JSON.stringify(cart));
    }
    
    // Add item to cart (used by other pages)
    function addToCart(partId) {
        const part = window.partsData.find(p => p.id === partId);
        if (!part) return;
        
        // Check if item already in cart
        const existingItem = cart.find(item => item.id === partId);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                id: part.id,
                title: part.title,
                price: part.price,
                sku: part.sku,
                image: part.image,
                quantity: 1
            });
        }
        
        saveCart();
        renderCart();
        
        // Show mini cart dropdown temporarily
        const miniCart = document.getElementById('mini-cart');
        const miniCartDropdown = document.getElementById('mini-cart-dropdown');
        
        miniCartDropdown.style.opacity = '1';
        miniCartDropdown.style.visibility = 'visible';
        miniCartDropdown.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            if (!miniCart.matches(':hover')) {
                miniCartDropdown.style.opacity = '0';
                miniCartDropdown.style.visibility = 'hidden';
                miniCartDropdown.style.transform = 'translateY(20px)';
            }
        }, 3000);
    }
    
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        alert('Proceeding to checkout would happen here in a real implementation.');
        // In a real app, you would redirect to a checkout page
        // window.location.href = 'checkout.html';
    });
    
    // Expose addToCart to window for other pages to use
    window.addToCart = addToCart;
    
    // Initialize cart on page load
    renderCart();
});