/* サイドバー */
var $page = $('.page');

$('.menu_toggle').on('click', function(){
  $page.toggleClass('shazam');
});

$('.content').on('click', function(){
  $page.removeClass('shazam');
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
