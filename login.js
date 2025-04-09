document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const toggleSignupPassword = document.getElementById('toggle-signup-password');
    const toggleLoginPassword = document.getElementById('toggle-login-password');
    const signupPassword = document.getElementById('signup-password');
    const loginPassword = document.getElementById('login-password');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    toggleSignupPassword.addEventListener('click', () => {
        const type = signupPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        signupPassword.setAttribute('type', type);
        toggleSignupPassword.classList.toggle('fa-eye-slash');
    });

    toggleLoginPassword.addEventListener('click', () => {
        const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        loginPassword.setAttribute('type', type);
        toggleLoginPassword.classList.toggle('fa-eye-slash');
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Registration successful! Please login.');
        container.classList.remove("active");
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Login successful! Redirecting to home page.');
        // Redirect to home page or perform other actions
        window.location.href = 'index.html'; // Change to your home page URL
    });
});