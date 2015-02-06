'use strict';

describe('Controller: DataControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('appfullstackApp'));

  var DataControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DataControllerCtrl = $controller('DataControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
