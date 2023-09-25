document.addEventListener("DOMContentLoaded", function () {
        const getStartedButton = document.getElementById("get-started-button");
        const signupForm = document.getElementById("signup-form");
        let formVisible = false;

        // Toggle form visibility when Get Started button is clicked
        getStartedButton.addEventListener("click", function () {
            if (!formVisible) {
                signupForm.style.display = "block";
            } else {
                signupForm.style.display = "none";
            }
            formVisible = !formVisible;
        });
    });
function submitLoginForm(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the form data
        const formData = new FormData(event.target);

        // Send a POST request to the Flask login route
        fetch('/login', {
            method: 'POST',
            body: formData,
            redirect: 'follow' // Follow redirects
        })
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url; // Redirect to the returned URL
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

const contactLink = document.querySelector('.contact-link');
const contactInfo = document.querySelector('.contact-info');

contactLink.addEventListener('mouseenter', () => {
    contactInfo.style.display = 'block';
});

contactLink.addEventListener('mouseleave', () => {
    contactInfo.style.display = 'none';
});
