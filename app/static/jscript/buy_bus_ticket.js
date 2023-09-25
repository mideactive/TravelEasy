// Get references to the buttons and form sections
const interStateButton = document.getElementById('inter-state-button');
const intraStateButton = document.getElementById('intra-state-button');
const interStateForm = document.querySelector('.inter-state-form');
const intraStateForm = document.querySelector('.intra-state-form');

// Add click event listeners to the buttons
interStateButton.addEventListener('click', function () {
    interStateForm.style.display = 'block'; // Display Inter-State form
    intraStateForm.style.display = 'none'; // Hide Intra-State form
});

intraStateButton.addEventListener('click', function () {
    intraStateForm.style.display = 'block'; // Display Intra-State form
    interStateForm.style.display = 'none'; // Hide Inter-State form
});
