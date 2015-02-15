
/* global require: true, angular: true */
/* jshint globalstrict: true */
'use strict';

// var angular = require('angular');
require('angular');

angular.module('app', [
  require('./lib.js').name
])
.config(require('./config.js'))
.run(require('./run.js')); 
