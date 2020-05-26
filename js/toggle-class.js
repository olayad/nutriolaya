document.querySelector("#toogle-intro").addEventListener('click', toggleLeer);
document.querySelector("#toogle-conoceme").addEventListener('click', toggleLeer);

function toggleLeer(event){
    console.log('hi from', this.id)
    var spans = $(this).find("span");
    for (i = 0, len = spans.length; i < len; i++){
        $(spans[i]).toggleClass('active');
    }
}

// Fixed background does not work in IOS devices
let isIOS = (/iPad|iPhone|iPod/.test(navigator.platform) ||
(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
!window.MSStream

console.log("isIOS:", typeof isIOS);
if (isIOS === true){
   console.log('IOS device, switching to background scroll.');
   // $(".paral-vine").toggleClass("test");
   $(".paral-vine").toggleClass("paral-fixed");
   $(".paral-vine").toggleClass("paral-scroll");
   console.log($(".paral-vine"));
}
