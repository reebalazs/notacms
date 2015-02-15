/* global module: true, require: true, angular: true */
/* jshint globalstrict: true */
'use strict';

module.exports = ['$scope', '$log',
  function Demo1Controller($scope, $log) {

    // id
    $scope.db = 'http://127.0.0.1:5984/database';
    $scope.id = 'TEST';
    // default content
    $scope.content = {
      title: ''
    };

    var PouchDB = require('pouchdb');
    PouchDB.debug.enable('pouchdb:*');
    var db = new PouchDB($scope.db);

    db.get($scope.id).catch(function(err) {
      if (err.status === 404) {
        return $scope.content;
      } else {
        throw err;
      }
    }).then(function (doc) {
      //$log.log('read', doc);
      $scope.$apply(function() {
        $scope.content = doc;
      });
    }).catch(function (err) {
      $log.log(err);
    });

    function onChange(newVal, oldVal) {
      if (newVal._rev == oldVal._rev && !angular.equals(newVal, oldVal)) {
        //$log.log('content changed', newVal, oldVal);
        db.put($scope.content).then(function(response) {
          $scope.$apply(function() {
            //$log.log('Writing back revision');
            $scope.content._rev = $scope.contentBeforeWrite._rev = response.rev;
          });
          // triggering manual change
          onChange($scope.content, $scope.contentBeforeWrite);
        });
        // set revision to null, marking put in progress
        // this will avoid writing changes
        $scope.content._rev = null;
        $scope.contentBeforeWrite = angular.copy($scope.content);
      }
    }

    $scope.$watch('content', onChange, true);

}];
