
$(document).ready(function () {
    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        draggable: true,
        pauseOnHover: false,
        respondTo: 'banner',
        slidesPerRow: 1,
        speed:1000,
      });

   $('.selling__slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      pauseOnHover: false,
      draggable: true,
    })  

    $('.tips__content').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      customPaging:
      function(slick,index) {
      return '<a>' + '<span>' + '</span>'+ '</a>'; },
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
    });
});