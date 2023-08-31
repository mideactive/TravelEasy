$(document).ready(function() {
    $('.search-form').submit(function(event) {
        // Prevent form submission
        event.preventDefault();

        // Perform input validation
        var from = $('#from').val();
        var to = $('#to').val();
        var departureDate = $('#departure-date').val();
        var returnDate = $('#return-date').val();

        if (!from || !to || !departureDate || !returnDate) {
            alert('Please fill out all fields.');
            return;
        }

        // Proceed with form submission
        $(this).unbind('submit').submit();
    });
});

$(document).ready(function() {
    $('.btn-book').hover(function() {
        $(this).css('background-color', '#ff8000');
    }, function() {
        $(this).css('background-color', '#ff6600');
    });
});

$(document).ready(function() {
    $('#sort-button').click(function() {
        var $flightCards = $('.flight-card');
        $flightCards.sort(function(a, b) {
            var priceA = parseFloat($(a).find('.flight-price').text().substring(1));
            var priceB = parseFloat($(b).find('.flight-price').text().substring(1));
            return priceA - priceB;
        });
        $('.flight-results-section').empty().append($flightCards);
    });
});

$(document).ready(function () {
    $("#local-flights-button").click(function () {
        $(".local-form").show();
        $(".international-form").hide();
    });

    $("#international-flights-button").click(function () {
        $(".local-form").hide();
        $(".international-form").show();
    });
});
