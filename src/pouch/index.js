
/* global module: true, require: true, angular: true */
/* jshint globalstrict: true */
'use strict';

module.exports = angular.module('app.pouch', [])
  .service('pouch', require('./pouch-service.js'))
  ;
