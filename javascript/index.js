$(document).ready(function() {
  $.localScroll({
    hash: true,
    reset: true,
    duration: 400
  });

  $('#show-nav').on('click', function (e) {
    $(this).next().slideToggle('fast');
    e.preventDefault();
  });
});
