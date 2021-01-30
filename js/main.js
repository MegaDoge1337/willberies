const swiper = new Swiper('.swiper-container', {

  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',

  },

  autoplay: {
    delay: 5000,
  }

});