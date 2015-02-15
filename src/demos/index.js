
/* global module: true, require: true, angular: true */
/* jshint globalstrict: true */
'use strict';

module.exports = angular.module('app.demos', [])
  .controller('Demo1Controller', require('./demo1.js'))
  .controller('AlohaDemoController', require('./aloha-demo.js'))
  ;
