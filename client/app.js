var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'foodstoreController',
		templateUrl: 'views/home.html'
	})
	.when('/foodstore', {
		controller:'foodstoreController',
		templateUrl: 'views/foodstore.html'
	})
	.when('/foodstore/details/:id',{
		controller:'foodstoreController',
		templateUrl: 'views/details.html'
	})
	.when('/foodstore/add',{
		controller:'foodstoreController',
		templateUrl: 'views/add.html'
	})
	.when('/foodstore/edit/:id',{
		controller:'foodstoreController',
		templateUrl: 'views/edit.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});