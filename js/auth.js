// js/auth.js
document.addEventListener('DOMContentLoaded', () => {
    
    const registerForm = document.getElementById('register-form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirm = document.getElementById('confirm_password').value;
            
            if (password !== confirm) {
                alert('Passwords do not match!');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }
            
            // If validation passes, simulate form submission for demo
            alert('Registration successful! Redirecting to login...');
            window.location.href = 'login.html';
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate login
            window.location.href = 'dashboard.html';
        });
    }
});
