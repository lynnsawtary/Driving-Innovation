document.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementById('container');
    let registerBtn = document.getElementById('register');
    let loginBtn = document.getElementById('login');
    let signupForm = document.getElementById('signup-form');
    let loginForm = document.getElementById('login-form');
    let toggleSignupPassword = document.getElementById('toggle-signup-password');
    let toggleLoginPassword = document.getElementById('toggle-login-password');
    let signupPassword = document.getElementById('signup-password');
    let loginPassword = document.getElementById('login-password');

    // Feedback elements
    let signupFeedback = document.getElementById('signup-feedback');
    let loginFeedback = document.getElementById('login-feedback');

    // Load users from localStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [
        { name: "Lynn Sawtary", email: "lynn@example.com", password: "123" },
        { name: "Mohammad Mezher", email: "mohammad@example.com", password: "456" },
        { name: "Adam Dishari", email: "adam@example.com", password: "789" }
    ];

    // Save the users back to localStorage after a new registration
    function saveUsersToLocalStorage() {
        localStorage.setItem('users', JSON.stringify(users));
    }

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
        signupFeedback.textContent = ''; // Clear feedback when switching to signup
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
        loginFeedback.textContent = ''; // Clear feedback when switching to login
    });

    toggleSignupPassword.addEventListener('click', () => {
        let type = signupPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        signupPassword.setAttribute('type', type);
        toggleSignupPassword.innerHTML = type === 'password' ?
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>' :
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm1 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>';
    });

    toggleLoginPassword.addEventListener('click', () => {
        let type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        loginPassword.setAttribute('type', type);
        toggleLoginPassword.innerHTML = type === 'password' ?
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>' :
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm1 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>';
    });

    // Handle Signup form submission
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let signupEmail = document.getElementById('signup-email').value.trim();
        let signupPassword = document.getElementById('signup-password').value.trim();

        // Check if the email already exists
        let userExists = users.some(user => user.email === signupEmail);

        if (userExists) {
            signupFeedback.textContent = 'Account already exists! Please log in.';
            signupFeedback.style.color = 'red';
        } else {
            // Register new user
            let newUser = {
                name: document.getElementById('signup-name').value.trim(),
                email: signupEmail,
                password: signupPassword
            };
            users.push(newUser);

            // Save new users list to localStorage
            saveUsersToLocalStorage();

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

        let loginEmail = document.getElementById('login-email').value.trim(); // Remove spaces
        let loginPassword = document.getElementById('login-password').value.trim(); // Remove spaces

        console.log("Login attempt: ");
        console.log("Email:", loginEmail);
        console.log("Password:", loginPassword);

        // Check if the user exists and if the password is correct (case-insensitive comparison)
        let user = users.find(user =>
            user.email.toLowerCase() === loginEmail.toLowerCase() && user.password === loginPassword
        );

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
