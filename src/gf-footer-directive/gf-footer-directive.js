
/* global module: true, require: true, angular: true */
/* jshint globalstrict: true */
'use strict';

var $ = require('jquery');

module.exports = ['$window', '$timeout',
function($window, $timeout) {

  var elGhost, timer;

  function adjustStickyPosition(scope, el, attr) {
    // measure positions
    var $w = $($window);
    var viewPortBottom = $w.scrollTop() + $w.height();
    var ghostBottom = elGhost.offset().top + elGhost.outerHeight();
    var needsToStick = ghostBottom < viewPortBottom;
    $(el).css('position', needsToStick ? 'fixed' : 'static');
  }

  function adjustStickyDelayed(scope, el, attr) {
    if (!timer) {
      adjustStickyPosition(scope, el, attr);
      // Hold off next adjustments until a delay,
      // to avoid congesting up resize.
      timer = $timeout(function() {
        // Retry after the delay.
        adjustStickyPosition(scope, el, attr);
        timer = null;
      }, 100);
    }
  }

  function link(scope, el, attr) {
    elGhost = $(el.clone(true))
      .css({
        opacity: 0
      })
      .insertAfter(el);
    el.css('bottom', 0);
    var f = $.proxy(adjustStickyDelayed, null, scope, el, attr);
    $($window).bind('resize', f);
    scope.$on('resize.manually', f);
    f();
  }

  return {
    link: link
  };

}];
