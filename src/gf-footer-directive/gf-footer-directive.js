
/* global module: true, require: true, angular: true */
/* jshint globalstrict: true */
'use strict';

var $ = require('jquery');

module.exports = ['$window', '$timeout',
function($window, $timeout) {

  var elStatic, timer;

  function adjustStickyPosition(scope, el, attr) {
    // measure positions
    el = $(el);
    var needsToStick = el.offset().top < elStatic.offset().top;
    if (needsToStick) {
      el.css('opacity', 0);
      elStatic.css('opacity', 1);
    } else {
      el.css('opacity', 1);
      elStatic.css('opacity', 0);
    }
  }

  function adjustStickyDelayed(scope, el, attr) {
    if (timer) {
      $timeout.cancel(timer);
    }
    timer = $timeout(function() {
      adjustStickyPosition(scope, el, attr);
    }, 200);
  }

  function link(scope, el, attr) {
    elStatic = $(el.clone(true))
      .css({
        position: 'fixed',
        bottom: 0,
        width: '100%'
      }).removeClass('row')
      .insertAfter(el);
    var f = $.proxy(adjustStickyDelayed, null, scope, el, attr);
    $($window).bind('scroll resize', f);
    scope.$on('scroll.manually', f);
    f();
  }

  return {
    link: link
  };

}];
