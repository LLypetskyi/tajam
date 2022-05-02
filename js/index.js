// scroll of navbar
const storeScroll = () => {
  document.documentElement.dataset.scroll =
    window.scrollY > 5 ? 'not-top' : 'top';
};
document.addEventListener('scroll', storeScroll);
storeScroll();

// add header slider
$(document).ready(function () {
  $('.header-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
});

// add qoute slider
$('.text-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.img-slider',
});
$('.img-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 6,
  asNavFor: '.text-slider',
  dots: true,
  arrows: true,
  centerMode: true,
  centerPadding: '70px',
  focusOnSelect: true,
});
