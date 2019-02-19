$(document).ready(function() {
  var $circleEl = $('.clocks-wrapper');
  $circleEl.viewportChecker({
      classToAdd: 'visible',
      repeat: true,
      offset: '5%',
      invertBottomOffset: true,
  });
});
