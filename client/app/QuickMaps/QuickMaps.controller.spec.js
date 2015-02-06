'use strict';

describe('Controller: QuickMapsCtrl', function () {

  // load the controller's module
  beforeEach(module('appfullstackApp'));

  var QuickMapsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuickMapsCtrl = $controller('QuickMapsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
