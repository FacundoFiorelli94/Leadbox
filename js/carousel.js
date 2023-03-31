
$("#owl").owlCarousel({
  autoplay: false,
  autoplayHoverPause: true,
  autoplaySpeed: 2000,
  items: 3,
  loop: true,
  autoHeight: false,
  responsiveClass: true,
  responsive: {
    0: {
      margin: 10,
      items: 1,
      nav: true,
    },
    600: {
      margin: 10,
      items: 2,
      nav: true,
    },
    1024: {
      margin: 50,
      items: 3,
      nav: true,
      loop: false,
    },
  },
});


