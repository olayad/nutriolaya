$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#page-content');
    var offset = startchange.offset();
    if(startchange.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {

                $(".navbar-default").css('background', 'rgba(255,255,255,0.8)');
                $(".navbar-brand").css('color', '#111111');

                // $(".navbar").css('color', 'purple');

            } else {
                $(".navbar-default").css('background', 'transparent');
                $(".navbar-brand").css('color', '#4a4a4a');
            }
        })
    }
});
console.log('bye');