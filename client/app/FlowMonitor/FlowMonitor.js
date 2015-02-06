'use strict';

angular.module('appfullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/FlowMonitor', {
        templateUrl: 'app/FlowMonitor/FlowMonitor.html',
        controller: 'FlowMonitorCtrl'
      });
  });
