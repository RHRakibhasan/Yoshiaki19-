$(document).ready(function(){
  
// responsive menu active 
      jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });
//  slider active 
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:' <span class="priv-arrow" ><i class="fas fa-chevron-left"></i></span>',
    nextArrow:' <span class="next-arrow" ><i class="fas fa-chevron-right"></i></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,  
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// menu active class  
    $('.mean-nav ul li').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
  });
// menu active class  
    $('.main-menu li').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
  });
// menu active class  
    $('#social-link li').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
  });
    
 // niceSelect
 $('select').niceSelect();

//  $('.select-country').flagStrap();


  });