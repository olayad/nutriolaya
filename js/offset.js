


  var divId;

  $('.nav-link').click(function(){
    divId = $(this).attr('href');
     $('html, body').animate({
      scrollTop: $(divId).offset().top - 75
    }, 100);
  });


$(document).ready(function() {
    $('#leer').click(function () {
        $('#conoce-mas').toggleClass("active");
        $('#conoce-menos').toggleClass("active");
        console.log("just toggled classes!")
        //
        // if ($(this).hasClass("active")) {
        //     $(this).text("Leer más");
        // } else {
        //     $(this).text("Leer menos");
        // }

    });
});

// $(document).ready(function() {
//
//
// $('[data-toggle="collapse"]').click(function() {
//   $(this).toggleClass( "active" );
//   if ($(this).hasClass("active")) {
//     $(this).text("Hide");
//   } else {
//     $(this).text("Show");
//   }
// });