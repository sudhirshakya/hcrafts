$(document).ready(function() {
    $("#myCarousel").swiperight(function () {
        alert ("right swipped");
    });
    $("#myCarousel").swipeleft(function () {
        alert ("left swipped");
    });
});
