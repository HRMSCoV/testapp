'use strict';

describe('Controller: LogsMgmntCtrl', function () {

  // load the controller's module
  beforeEach(module('appfullstackApp'));

  var LogsMgmntCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogsMgmntCtrl = $controller('LogsMgmntCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
