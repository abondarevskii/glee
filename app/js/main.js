$(function () {


   $('.top-slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true
   }),

      $('.clients-slider__items').slick({
         arrows: false,
         autoplay: true,
         speed: 3000,
         slidesToShow: 5

      });

   var mixer = mixitup('.products__items');
   var mixer = mixitup('.design__items');

});

