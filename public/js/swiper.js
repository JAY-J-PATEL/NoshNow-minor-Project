var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints : {
    0 : {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2
    },
    950: {
      slidesPerView: 3
    },
  }
});