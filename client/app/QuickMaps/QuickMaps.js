'use strict';

angular.module('appfullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/QuickMaps', {
        templateUrl: 'app/QuickMaps/QuickMaps.html',
        controller: 'QuickMapsCtrl'
      });
  });
