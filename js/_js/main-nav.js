$('.site-nav').on('click', function(){
  if ($(this).find(':checked').length > 0) {
    $(this).find('ul').css('display','block');
  } else {
    $(this).find('ul').css('display','none');
  }
});