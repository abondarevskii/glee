$(function () {


   $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
   });


   $('.product-tabs__top-item').on('click', function (e) {
      e.preventDefault();
      $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
      $(this).addClass('product-tabs__top-item--active');


      $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
      $($(this).attr('href')).addClass('product-tabs__content-item--active');



   });


   $('.product-item__num').styler();

   $('.product-item__thumb').slick({
      asNavFor: '.product-item__big',
      focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      draggable: false
   });
   $('.product-item__big').slick({
      asNavFor: '.product-item__thumb',
      draggable: false,
      arrows: false,
      fade: true
   });


   $('.content-list__filter-btn').on('click', function () {
      $('.content-list__filter-btn').removeClass('content-list__filter-btn--active');
      $(this).addClass('content-list__filter-btn--active');
   });

   $('.button-list').on('click', function () {
      $('.content-list__items').addClass('content-list__items--list');
   });
   $('.button-grid').on('click', function () {
      $('.content-list__items').removeClass('content-list__items--list');
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
         slidesToShow: 5,
         responsive: [
            {
               breakpoint: 860,
               settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,

               }
            },
            {
               breakpoint: 600,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
               }
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
               }
            }
         ]
      });

   $('.related-slider__items').slick({
      arrows: true,
      slidesToShow: 4,
      appendArrows: $('.your-class-arrow'),
      prevArrow: '<button id="prev" type="button" class="btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"><img src="images/icons/arrow-left-btn.svg" alt="arrow-left"></i> </button>',
      nextArrow: '<button id="next" type="button" class="btn-juliet"> <i class="fa fa-chevron-right" aria-hidden="true"><img src="images/icons/arrow-right-btn.svg" alt="arrow-right"></i></button>',
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,

            }
         },
         {
            breakpoint: 846,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 601,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }

      ]



   });


   // MixitUp !!!!!!!!!!!!

   let containerEl1 = document.querySelector('.design');
   let containerEl2 = document.querySelector('.products');
   let config = {
      controls: {
         scope: 'local',
      },
   };
   (() => mixitup(containerEl1, config))();
   (() => mixitup(containerEl2, config))();


});

