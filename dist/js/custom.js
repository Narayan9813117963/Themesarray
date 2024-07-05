window.addEventListener("scroll", function () {
    var header = document.querySelector(".header"); // Use querySelector instead of getElementById
    if (window.scrollY > 100) {
      header.classList.add("fixed");
      header.style.opacity = "1";
    } else {
      header.classList.remove("fixed");
      header.style.opacity = "1";
    }
  });

(function($) {

  'use strict';

  var $filters = $('.filter [data-filter]'),
    $boxes = $('.product-list [data-category]');

  $filters.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterColor = $this.attr('data-filter');

    if ($filterColor == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().finish().promise().done(function() {
          $boxes.each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().finish().promise().done(function() {
          $boxes.filter('[data-category = "' + $filterColor + '"]').each(function(i) {
            $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
          });
        });
    }
  });

})(jQuery);

$('.slider-main').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: ".next-btn",
  prevArrow: ".prev-btn",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});
$('.blog-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: ".next-blog-btn",
  prevArrow: ".prev-blog-btn",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});