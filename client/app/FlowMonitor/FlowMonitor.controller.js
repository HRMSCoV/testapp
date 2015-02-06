'use strict';

angular.module('appfullstackApp')
  .controller('FlowMonitorCtrl', function ($scope, $http, CSVtoJSON) {

    $scope.selectedRow = [];

     $scope.gridOptions = {
      enableRowSelection: true,
      enableSorting: false,
      multiSelect : false,
      columnDefs: [
        { field: 'ConnectorName', enableHiding: false, suppressRemoveSort: true},
        { field: 'ExecutionDateTime', enableHiding: false, suppressRemoveSort: true},
        { field: 'Progress', enableHiding: false, suppressRemoveSort: true},
        { field: 'Status', enableHiding: false, suppressRemoveSort: true}
      ]
    };

     $scope.gridOptions.onRegisterApi = function( gridApi ) {
      $scope.gridApi = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope,function(row){
      $scope.rowSelected = row.isSelected;      
      $scope.selectedRow.splice(0,1);
      $scope.selectedRow.push({
        ConnectorName : row.entity.ConnectorName,
        Version : row.entity.VersionNumber
      })
      });
    };

     $scope.Refresh = function() {
      $scope.Initiate();
    };

    $scope.Restart = function() {
      $http.defaults.useXDomain = true;

      $http.get('http://192.168.2.77:8180/'+$scope.selectedRow[0].ConnectorName+'_'+$scope.selectedRow[0].Version+'/services/'+$scope.selectedRow[0].ConnectorName+'?method=runJob').success(function(result) {
      $scope.Initiate();
      }).error(function(result) {
        $scope.Initiate();
      })
      $scope.Initiate();
    };

    $scope.Initiate = function() {
    $http.get('/stats_file.txt').success(function(data) {
        $scope.gridOptions.data = CSVtoJSON.convertToArray(data);
        $scope.rowSelected = false;
      })
  }
    
    $scope.Initiate();

  });
