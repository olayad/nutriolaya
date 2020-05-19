document.querySelector("#toogle-intro").addEventListener('click', toggleLeer);
document.querySelector("#toogle-conoceme").addEventListener('click', toggleLeer);

function toggleLeer(event){
    console.log('hi from', this.id)
    var spans = $(this).find("span");
    for (i = 0, len = spans.length; i < len; i++){
        $(spans[i]).toggleClass('active');
    }
}
