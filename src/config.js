
/* global module: true, require: true, angular: true */
/* jshint globalstrict: true */
'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function config($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $urlRouterProvider.when('/', '/aloha-demo');
  $urlRouterProvider.otherwise('/notfound');

  $stateProvider
    .state('demo1', {
      url: '/demo1',
      templateUrl: 'demos/demo1.html',
      controller: 'Demo1Controller'
    });

  $stateProvider
    .state('aloha-demo', {
      url: '/aloha-demo',
      templateUrl: 'demos/aloha-demo.html',
      controller: 'AlohaDemoController'
    });

  $stateProvider
    .state('about-us', {
      url: '/about-us',
      templateUrl: 'demos/about-us.html'
    });

  $stateProvider
    .state('notfound', {
      url: '/notfound',
      templateUrl: 'demos/notfound.html'
    });

}];
