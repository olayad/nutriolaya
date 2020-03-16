  var divId;

  $('.nav-link').click(function(){
    divId = $(this).attr('href');
     $('html, body').animate({
      scrollTop: $(divId).offset().top - 75
    }, 100);
  });
  console.log("just scrolled");