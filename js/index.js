// Wait until the entire page is loaded before running this JS
$(document).ready(function() {

  $("#menu").click(function() {
    $(".topnav").slideToggle(170, 'swing');
    $('nav ul a:last-of-type').removeClass('gold button-sm');
  });
});