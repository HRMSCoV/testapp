'use strict';

describe('Controller: FlowDesignerCtrl', function () {

  // load the controller's module
  beforeEach(module('appfullstackApp'));

  var FlowDesignerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlowDesignerCtrl = $controller('FlowDesignerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
