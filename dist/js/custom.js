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
  dots: false,
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