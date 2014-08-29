'use strict';

xdescribe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularLetusgoApp'));

  var MainCtrl,$controller,IndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
    $controller = $injector.get('$controller');
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    IndexCtrl = $controller('IndexCtrl', {
      $scope: scope
    });
  }));

  it('should active_index equal true', function () {
    spyOn(IndexCtrl.$scope,'highLight');
    expect(IndexCtrl.$scope.highLight).toHaveBeenCalledWith('active_index');
  });
});
