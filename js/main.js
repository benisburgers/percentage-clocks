$(document).ready(function() {
  var $circleEl = $('.clocks-wrapper');
  $circleEl.viewportChecker({
      classToAdd: 'visible',
      repeat: true,
      offset: '10%',
      invertBottomOffset: true
  });

  var $barEl = $('.horizontal-bar-container');
  $barEl.viewportChecker({
      repeat: true,
      offset: '10%',
      invertBottomOffset: true,
      callbackFunction: function(elem, action){

        if(action == 'remove') {
          elem.find('.bar-foreground').css('width', '50%');
        } else {
          elem.find('.bar-foreground').css('width', elem.attr('data-percentage') + '%');
        }
      }
  });




  var $horizontalBar = $('.bar-foreground')
  $horizontalBar.click(function(){
    $(this).css("width", "30%");
  })
});
