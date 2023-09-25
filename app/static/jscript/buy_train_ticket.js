// Get references to the buttons and forms
const interStateButton = document.getElementById('inter-state-button');
const withinStateButton = document.getElementById('within-state-button');
const interStateForm = document.getElementById('inter-state-form');
const withinStateForm = document.getElementById('within-state-form');

// Add click event listeners to the buttons
interStateButton.addEventListener('click', function () {
    interStateForm.style.display = 'block';
    withinStateForm.style.display = 'none';
});

withinStateButton.addEventListener('click', function () {
    interStateForm.style.display = 'none';
    withinStateForm.style.display = 'block';
});
