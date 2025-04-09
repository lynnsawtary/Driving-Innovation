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

    // Feedback elements
    const signupFeedback = document.getElementById('signup-feedback');
    const loginFeedback = document.getElementById('login-feedback');

    // User data (could be from a database in real applications)
    const users = [
        { name: "Lynn Sawtary", email: "lynn@example.com", password: "123" },
        { name: "Mohammad Mezher", email: "mohammad@example.com", password: "456" },
        { name: "Adam Dishari", email: "adam@example.com", password: "789" }
    ];

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
        signupFeedback.textContent = ''; // Clear feedback when switching to signup
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
        loginFeedback.textContent = ''; // Clear feedback when switching to login
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

    // Handle Signup form submission
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const signupEmail = document.getElementById('signup-email').value;
        const signupPassword = document.getElementById('signup-password').value;

        // Check if the email already exists
        const userExists = users.some(user => user.email === signupEmail);

        if (userExists) {
            signupFeedback.textContent = 'Account already exists! Please log in.';
            signupFeedback.style.color = 'red';
        } else {
            // Register new user
            const newUser = {
                name: document.getElementById('signup-name').value,
                email: signupEmail,
                password: signupPassword
            };
            users.push(newUser);

            // Provide success feedback and switch to login form
            signupFeedback.textContent = 'Registration successful! Redirecting to login.';
            signupFeedback.style.color = 'green';

            // Delay switching to login form to let the user see the success message
            setTimeout(() => {
                container.classList.remove("active"); // Switch to login form
            }, 2000); // 2-second delay
        }
    });

    // Handle Login form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const loginEmail = document.getElementById('login-email').value;
        const loginPassword = document.getElementById('login-password').value;

        // Check if the user exists and if the password is correct
        const user = users.find(user => user.email === loginEmail && user.password === loginPassword);

        if (user) {
            loginFeedback.textContent = 'Login successful! Redirecting to home page.';
            loginFeedback.style.color = 'green';

            // Redirect to home page or perform other actions
            setTimeout(() => {
                window.location.href = 'index.html'; // Change to your home page URL
            }, 2000); // 2-second delay to show success message
        } else {
            loginFeedback.textContent = 'Invalid email or password. Please try again.';
            loginFeedback.style.color = 'red';
        }
    });
});