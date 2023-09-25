$(document).ready(function () {
    $("#local-flights-button").click(function () {
        $(".local-form").show();
        $(".international-form").hide();
    });

    $("#international-flights-button").click(function () {
        $(".local-form").hide();
        $(".international-form").show();
    });

    // Handle form submission
    $('.search-form').submit(function (event) {
        // Prevent form submission
        event.preventDefault();

        // Perform input validation within the specific form
        var $form = $(this);
        var from = $form.find('#from').val();
        var to = $form.find('#to').val();
        var departureDate = $form.find('#departure-date').val();
        var returnDate = $form.find('#return-date').val();

        if (!from || !to || !departureDate || !returnDate) {
            alert('Please fill out all fields.');
            return;
        }

        // Proceed with form submission for this specific form
        $form.unbind('submit').submit();
    });
});
