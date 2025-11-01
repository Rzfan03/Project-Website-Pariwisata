$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#navbarv').addClass('!bg-white shadow-lg');
    $('#navbarv').removeClass('bg-gradient-to-b from-black/50 to-transparent');
    $('#zalando li a').addClass('text-gray-700');
    $('#zalando li a').removeClass('text-white');
    $('#title-nav').removeClass('text-white');
    
    $('#dropdownNavbarLink').addClass('text-gray-700');
    $('#dropdownNavbarLink').removeClass('text-white');
    $('#dropdownNavbar a').addClass('text-gray-700');
    $('#dropdownNavbar a').removeClass('text-white');
    
    console.log("OK");
  } else {
    $('#navbarv').removeClass('!bg-white shadow-lg');
    $('#navbarv').addClass('bg-gradient-to-b from-black/50 to-transparent');
    $('#zalando li a').addClass('text-white');
    $('#zalando li a').removeClass('text-gray-700');
    $('#title-nav').addClass('text-white');
    
    $('#dropdownNavbarLink').addClass('text-white');
    $('#dropdownNavbarLink').removeClass('text-gray-700');
    $('#dropdownNavbar a').addClass('text-white');
    $('#dropdownNavbar a').removeClass('text-gray-700');
  }
});