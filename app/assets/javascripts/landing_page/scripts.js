$(document).ready(function() {
  // SUPERIOR MENU
  $('.anchorLink').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-80
    }, 800);
    $('.anchorLink').removeClass('active');
    return false;
  });

  $('.nav .anchorLink').click(function(){
    $(this).addClass('active');
  });
  $('.m-banner .anchorLink').click(function(){
    $('.nav li:nth-child(2) a').addClass('active');
  });

  $('.navbar-collapse a').click(function(){
    setTimeout(function(){
      $(".navbar-collapse").collapse('hide');
    }, 300);
  });

  //ADD CLASS ON MENU WHEN SCROLLING
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".navbar-home").addClass("menu-scroll");
    } else {
        $(".navbar-home").removeClass("menu-scroll");
    }
  });
});
