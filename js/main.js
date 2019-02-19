$(document).ready(function() {
  var $circleEl = $('.circle, .percentage');
  $circleEl.viewportChecker({
      classToAdd: 'visible',
      repeat: true,
      offset: '-1%',
      invertBottomOffset: true,
  });
});
