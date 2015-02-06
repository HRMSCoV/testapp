'use strict';

angular.module('appfullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/LogsMgmnt', {
        templateUrl: 'app/LogsMgmnt/LogsMgmnt.html',
        controller: 'LogsMgmntCtrl'
      });
  });
