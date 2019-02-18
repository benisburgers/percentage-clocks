$(document).ready(function() {
  var $circleEl = $('.circle, .numbers');
  $circleEl.viewportChecker({
      classToAdd: 'visible',
      repeat: true,
      offset: '5%',
      invertBottomOffset: true,
  });
});
