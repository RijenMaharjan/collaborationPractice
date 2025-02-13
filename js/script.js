document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000, // Change slides every 3 seconds
      disableOnInteraction: false, // Keeps autoplay active after user interaction
    },
    speed: 1000, // Smooth transition speed (1s)
    effect: "slide", // Options: "slide", "fade", "cube", "coverflow", "flip"
    fadeEffect: {
      crossFade: true, // Ensures smooth fading
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
