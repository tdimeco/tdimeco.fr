//
// Home page controller
// ==============================================================
//


(function () { 'use strict';


  var app = angular.module('tdimecoApp');

  // Route config
  app.config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/pages/home.html',
      controller: 'HomeController'
    });
  });

  // Controller declaration
  app.controller('HomeController', function ($scope, database) {
    $scope.$emit('changePageTitle', 'Site web personnel');
    $scope.homeItems = database.getHomeItems();
  });


})();
