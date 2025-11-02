$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#navbarv').addClass('!bg-white shadow-lg');
    $('#navbarv').removeClass('bg-gradient-to-b from-black/50 to-transparent');
    
    $('#zalando').removeClass('bg-black/60');
    $('#zalando li a').addClass('text-gray-700');
    $('#zalando li a').removeClass('text-white');
    $('#title-nav').removeClass('text-white');
    
    $('#dropdownNavbarLink').addClass('text-gray-700');
    $('#dropdownNavbarLink').removeClass('text-white');
    $('#dropdownNavbar a').addClass('text-gray-950');

    
    console.log("OK");
  } else {
    $('#navbarv').removeClass('!bg-white shadow-lg');
    $('#navbarv').addClass('bg-gradient-to-b from-black/50 to-transparent');
    
    $('#zalando').addClass('bg-black/60');
    $('#zalando li a').addClass('text-white');
    $('#zalando li a').removeClass('text-gray-700');
    $('#title-nav').addClass('text-white');
    
    $('#dropdownNavbarLink').addClass('text-white');
    $('#dropdownNavbarLink').removeClass('text-gray-700');
  }
});

// function faq
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('svg');
      
      this.classList.toggle('active');
      answer.classList.toggle('show');
      
      faqQuestions.forEach(otherQuestion => {
        if (otherQuestion !== this) {
          otherQuestion.classList.remove('active');
          otherQuestion.nextElementSibling.classList.remove('show');
        }
      });
    });
  });
});