'use strict';

var app = angular.module('crm', ['ngRoute'])

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'temps/login.html',
        controller: 'Login'
      }).
      when('/home', {
        templateUrl: 'temps/home.html',
        controller: 'Home'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);
/*(function(){
	'use strict';
	var app = angular.module('home', ['ngRoute', 'ngAnimate']);

  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				redirect: '/login'
			})
      .when('/app/login', {
				templateUrl: 'temps/login.html',
				controller: 'LoginSetup',
				controllerAs: 'login'
			})
      .otherwise({
        templateUrl: 'temps/login.html',
        controller: 'LoginSetup',
        controllerAs: 'login'
      });

    $locationProvider.html5Mode(true);
  } ]);

  app.controller('MainCtrl', ['$scope', function($scope){
		$scope.$on('LOAD', function(){$scope.loading=true});
		$scope.$on('UNLOAD', function(){$scope.loading=false});
	} ]);

  app.controller('LoginSetup', ['$http', '$rootScope', '$location', '$scope', function($http, $rootScope, $location){
    console.log("login");
  } ]);
});*/
