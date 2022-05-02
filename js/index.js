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

  // add qoute slider
  $('.text-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    appendArrows: $('.img-slider'),
    asNavFor: '.img-slider',
  });
  $('.img-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 0,
    dots: false,
    arrows: false,
    asNavFor: '.text-slider',
  });
});
