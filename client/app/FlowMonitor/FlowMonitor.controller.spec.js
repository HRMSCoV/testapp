'use strict';

describe('Controller: FlowMonitorCtrl', function () {

  // load the controller's module
  beforeEach(module('appfullstackApp'));

  var FlowMonitorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlowMonitorCtrl = $controller('FlowMonitorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
