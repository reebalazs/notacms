
/* global module: true, require: true, angular: true */
/* jshint globalstrict: true */
'use strict';

module.exports = angular.module('gf-footer-directive', [])
  .directive('gfFooter', require('./gf-footer-directive.js'))
  ;
