'use strict';

angular.module('appfullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/FlowDesigner', {
        templateUrl: 'app/FlowDesigner/FlowDesigner.html',
        controller: 'FlowDesignerCtrl'
      });
  });
