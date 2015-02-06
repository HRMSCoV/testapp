'use strict';

angular.module('appfullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/DataController', {
        templateUrl: 'app/DataController/DataController.html',
        controller: 'DataControllerCtrl'
      });
  });
