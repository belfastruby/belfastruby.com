$(document).ready(function(){
$(".scroll-about").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  });
});
