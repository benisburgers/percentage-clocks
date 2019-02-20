$(document).ready(function() {
  var $circleEl = $('.clocks-wrapper');
  $circleEl.viewportChecker({
      classToAdd: 'visible',
      repeat: false,
      offset: '10%',
      invertBottomOffset: true
  });

  var $barEl = $('.horizontal-bar-container');
  $barEl.viewportChecker({
      repeat: false,
      offset: '10%',
      invertBottomOffset: true,
      callbackFunction: function(elem, action){
        var dataPercentage = elem.attr('data-percentage')

        if(action == 'remove') {
          elem.find('.bar-foreground').css('width', '50%');
        } else if(action == 'add') {
          elem.find('.bar-foreground').css('width', dataPercentage + '%');
          changeNumberValue(elem, dataPercentage);
        }
      }
  });

  function changeNumberValue(element, endValue) {
    const start = 50;
    //current always starts in the middle
    var current = start;
    //end is the the given percentage (attribute)
    var end = endValue;
    //difference is the ABSOLUTE difference between start (50%) and end (attribute)
    var difference = Math.abs(start - end);
    //transitionDelay is the amount of time each number change should take to change, in order to allow the numbers and the bar to end AT THE SAME TIME!
    var transitionDelay = 1000 / difference
    if (end < start) {
      subtract(current, end, element, transitionDelay);
    }
    else if (end > start) {
      add(current, end, element, transitionDelay);
    }
  }

  function subtract (current, end, element, transitionDelay) {
     setTimeout(function () {
        current--;
        if (current >= end) {
           subtract(current, end, element, transitionDelay);
           element.find('.text-left').html(current + '%')
           element.find('.text-right').html(100 - current + '%')
        }
     }, transitionDelay)
  }

  function add (current, end, element, transitionDelay) {
     setTimeout(function () {
        current++;
        if (current <= end) {
           add(current, end, element, transitionDelay);
           element.find('.text-left').html(current + '%')
           element.find('.text-right').html(100 - current + '%')
        }
     }, transitionDelay)
  }

});
