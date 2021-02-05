$(document).ready(function(){
  $('.site-nav').on('click', function(){
  if ($(this).find(':checked').length > 0) {
    $(this).find('ul').css('display','block');
  } else {
    $(this).find('ul').css('display','none');
  }
});
  $('.entry-content').fitVids();

  $('.slideshow').slick({
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    lazyLoad: 'ondemand',
    mobileFirst: true,
  })
});
