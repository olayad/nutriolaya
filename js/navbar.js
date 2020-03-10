$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#page-content');
    var offset = startchange.offset();
    if(startchange.length){
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                console.log('I am in if');
                $(".navbar").css('background', 'purple');

                // $(".navbar-default").css('background', 'rgba(255,255,255,0.8)');
                $(".navbar").css('color', 'purple');

            } else {
                console.log('else....');
                $(".navbar-default").css('background', 'transparent');
                $(".navbar-brand").css('color', '#4a4a4a');
            }
        })
    }
});
console.log('bye');