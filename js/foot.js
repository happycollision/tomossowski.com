---
---

$(document).ready(function(){
  {% include_relative _js/main-nav.js %}
  {% include_relative _js/video-considerations.js %}

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
