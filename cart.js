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
    const miniCartCount = document.getElementById('mini-cart-count');
    const miniCartItems = document.getElementById('mini-cart-items');
    const miniCartEmpty = document.getElementById('mini-cart-empty');
    const miniCartSubtotal = document.getElementById('mini-cart-subtotal');
    const miniCartSummary = document.getElementById('mini-cart-summary');
    
    // Hamburger menu functionality
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
        itemCount.textContent = totalItems;
        
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
             // Reset all values to zero
             subtotal.textContent = '$0.00';
             total.textContent = '$0.00';
             miniCartSubtotal.textContent = '$0.00';
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
                                <svg class="trash-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                                Remove
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
        
        // Mini cart checkout button
        if (e.target.classList.contains('btn-checkout') && !e.target.classList.contains('btn-view-cart')) {
            if (cart.length > 0) {
                document.getElementById('checkoutModal').classList.add('active');
            }
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
    
    // Add item to cart
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
    
    // Expose addToCart to window for other pages to use
    window.addToCart = addToCart;
    
    // Initialize cart on page load
    renderCart();
// Newsletter Modal functionality
let newsletterForm = document.querySelector('.newsletter-form');
let newsletterModal = document.getElementById('newsletterSuccessModal');
let closeNewsletterModal = document.getElementById('closeNewsletterModal');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Instead of alert, show the newsletter success modal
        if (newsletterModal) {
            newsletterModal.classList.add('active');
        }
        // Optionally clear the newsletter input field
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

// Also close the modal if clicking the overlay
if (newsletterModal) {
    newsletterModal.addEventListener('click', function(e) {
        if (e.target === newsletterModal) {
            newsletterModal.classList.remove('active');
        }
    });
}
    // ============== NEW CHECKOUT MODAL FUNCTIONALITY ==============
    const checkoutModal = document.getElementById('checkoutModal');
    const orderConfirmationModal = document.getElementById('orderConfirmationModal');
    const checkoutForm = document.getElementById('checkoutForm');
    const confirmationEmail = document.getElementById('confirmationEmail');
    const confirmationClose = document.getElementById('confirmationClose');

    // Open checkout modal from main checkout button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            checkoutModal.classList.add('active');
        }
    });

    // Close modals
    document.querySelectorAll('.modal-close, #confirmationClose').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            checkoutModal.classList.remove('active');
            orderConfirmationModal.classList.remove('active');
        });
    });

    // Close when clicking outside modal
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Form submission
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('checkoutName').value,
            email: document.getElementById('checkoutEmail').value,
            phone: document.getElementById('checkoutPhone').value,
            address: document.getElementById('checkoutAddress').value
        };
        
        // Show confirmation
        confirmationEmail.textContent = formData.email;
        checkoutModal.classList.remove('active');
        orderConfirmationModal.classList.add('active');
        
        // Clear cart
        cart = [];
        localStorage.removeItem('mlaCart');
        renderCart();
        
        // Reset form
        checkoutForm.reset();
    });
});