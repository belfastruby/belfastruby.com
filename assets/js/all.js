$(document).ready(function(){
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

$(document).ready(function(){
  if (!event.preventDefault) {
      event.preventDefault = function() {
          event.returnValue = false; //ie
      };
  }
});