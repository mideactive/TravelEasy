document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector('.cta-button');
    const loginButton = document.querySelector('#login-button');
    const signupButton = document.querySelector('#signup-button');
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');

    let buttonsVisible = false; // Flag to track button visibility state

    ctaButton.addEventListener('click', () => {
        buttonsVisible = !buttonsVisible; // Toggle the flag

        if (buttonsVisible) {
            loginButton.style.display = "block";
            signupButton.style.display = "block";
            loginForm.style.display = "none";
            signupForm.style.display = "none";
        } else {
            loginButton.style.display = "none";
            signupButton.style.display = "none";
            loginForm.style.display = "none";
            signupForm.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');

    let isLoginFormVisible = false;
    let isSignupFormVisible = false;

    loginButton.addEventListener('click', () => {
        if (!isLoginFormVisible) {
            loginForm.style.display = "block";
            signupForm.style.display = "none";
            isLoginFormVisible = true;
            isSignupFormVisible = false;
        } else {
            loginForm.style.display = "none";
            isLoginFormVisible = false;
        }
    });

    signupButton.addEventListener('click', () => {
        if (!isSignupFormVisible) {
            signupForm.style.display = "block";
            loginForm.style.display = "none";
            isSignupFormVisible = true;
            isLoginFormVisible = false;
        } else {
            signupForm.style.display = "none";
            isSignupFormVisible = false;
        }
    });
});
