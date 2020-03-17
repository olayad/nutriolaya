// Accomodates for fixed navbar height when making href jumps
var divId;
$('.nav-link').click(function(){
    divId = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(divId).offset().top - 75
    }, 100);
});


// Expands about me section
$(document).ready(function() {
    $('#conoce').click(function () {
        $('#conoce-mas').toggleClass("active");
        $('#conoce-menos').toggleClass("active");
    });
});