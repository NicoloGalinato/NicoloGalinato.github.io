
$(document).ready(function () {

  // Get class
  let menu = $("#menu-icon");
  let navbar = $(".navbar");
  let navlist = $(".nav-list");

  // Menu onclick function
  $(menu).click(function () {
    $(menu).toggleClass("bx-x");
    $(navbar).toggleClass("open");
  });

  $(navlist).click(function () {
    $(menu).removeClass("bx-x");
    $(navbar).removeClass("open");
  });

  $(window).scroll(function () {

    var scrollTop = $(window).scrollTop();

    if (scrollTop >= 150) {
      $('.nav-container').addClass('solid-nav');
    } else {
      $('.nav-container').removeClass('solid-nav');
    }

  });
});
