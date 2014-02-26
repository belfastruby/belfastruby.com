$(document).ready(function(){

  $(".scroll-about").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#about").offset().top
      }, 1000);
  });


  $(function () {
      setNavigation();
  });

  function setNavigation() {
      var path = window.location.pathname;
      path = path.replace(/\/$/, "");
      path = decodeURIComponent(path);

      $("nav ul li a").each(function () {
          var href = $(this).attr('href');
          if (path.substring(0, href.length) === href) {
              $(this).closest('a').addClass('active');
          }
      });
  }

});