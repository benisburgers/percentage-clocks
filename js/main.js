$(document).ready(function() {
  var $circleEl = $('.clocks-wrapper');
  $circleEl.viewportChecker({
      classToAdd: 'visible',
      repeat: true,
      offset: '10%',
      invertBottomOffset: true,
  });
});
