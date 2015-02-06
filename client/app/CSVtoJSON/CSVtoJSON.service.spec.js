'use strict';

describe('Service: CSVtoJSON', function () {

  // load the service's module
  beforeEach(module('appfullstackApp'));

  // instantiate service
  var CSVtoJSON;
  beforeEach(inject(function (_CSVtoJSON_) {
    CSVtoJSON = _CSVtoJSON_;
  }));

  it('should do something', function () {
    expect(!!CSVtoJSON).toBe(true);
  });

});
