
/* global module: true, require: true, angular: true, window: true, navigator: true */
/* jshint globalstrict: true */
'use strict';

// var angular = require('angular');
require('angular');

// load extra resources that depend on these libs and
// cannot be loaded in async
window.loadAlohaAfterLibs();

// load bootstrap
var $ = window.jQuery = require('jquery');
require('bootstrap');

var Aloha = window.Aloha || (window.Aloha = {});
//Aloha.jQuery = $;
Aloha.settings = window.alohaSettings;

// http://n33.co/2013/03/23/browser-on-jquery-19x-for-legacy-ie-detection
$.browser = {};
$.browser.msie = false;
$.browser.version = 0;
if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
  $.browser.msie = true;
  $.browser.version = RegExp.$1;
}

function aloha() {
  window.ngAlohaEditorConfig = {
    baseUrl: '/static/ng-aloha-editor/'
  };
  // require.js and aloha.js shall be called in from the template.
  require('ng-aloha-editor');
  return angular.module('ngAlohaEditor');
}

// load our compiled templates
angular.module('templates', []);
require('../temp/templates.js');

module.exports = angular.module('app.lib', [
  // 3rd party dependencies
  require('angular-ui-router'),
  aloha().name,
  // components
  require('./demos').name,
  require('./pouch').name,
  require('./gf-footer-directive').name,
  // partials
  'templates'
])
.constant('version', require('../package.json').version);
