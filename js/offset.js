// Accomodates for fixed navbar height when making href jumps from navbar
var divId;
$('.nav-link').click(function(){
    divId = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(divId).offset().top - 75
    }, 100);
});

// // Accomodates for fixed navbar height when making href jumps from servicios cards
// $('.leer').click(function(){
//     divId = $(this).attr('href');
//     // $('html, body').animate({
//     //     scrollTop: $(divId).offset().top - 100
//     // },100);
//     // window.location.href = $(divId).offset().top - 390
//     window.location.href = "index.html#contacto"
//     window.alert(divId);
//     console.log(divId);
// });

$(document).ready(function() {
    $('.conoce').click(function () {
        $('.conoce-mas').toggleClass("active");
        $('.conoce-menos').toggleClass("active");
    });
});
