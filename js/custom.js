
$('.multiple').owlCarousel({
  rtl:true,
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});
var owl = $('.single').owlCarousel({

  dots:true,
  loop:true,
  nav:false,
  dotsContainer: '#carousel-custom-dots',
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});
$('.owl-prev').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
});
$('.owl-next').click(function () {
    owl.trigger('next.owl.carousel', [300]);
});
