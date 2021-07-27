$(function () {


   $('.product-list__filter-btn').on('click', function () {
      $('.product-list__filter-btn').removeClass('product-list__filter-btn--active');
      $(this).addClass('product-list__filter-btn--active');
   });

   $('.button-list').on('click', function () {
      $('product-list__items').addClass('product-list__items--list');
   });
   $('.button-grid').on('click', function () {
      $('product-list__items').removeClass('product-list__items--list');
   });


   $('.star').rateYo({
      starWidth: "13px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      spacing: "8px",
      readOnly: true,


   });

   $(".filter-price__input").ionRangeSlider({
      type: "double",
      prefix: "$",
      prettify_enabled: true,
      prettify_separator: ".",

      onStart: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      }

   });

   $('.top-slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      speed: 3000
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

