$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  items: 3,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
