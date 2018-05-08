var myApp = angular.module('myApp');

myApp.controller('foodstoreController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('FoodstoreController loaded...');

	$scope.getFoodStores = function(){
		$http.get('/api/foodstore').success(function(response){
			$scope.foods = response;
		});
	}

	$scope.getFoodStore = function(){
		var id = $routeParams.id;
		$http.get('/api/foodstore/'+id).success(function(response){
			$scope.food = response;
		});
	}

	$scope.addFoodStore = function(){
		console.log($scope.food);
		$http.post('/api/foodstore/', $scope.food).success(function(response){
			window.location.href='#/foodstore';
		});
	}

	$scope.updateFoodStore = function(){
		var id = $routeParams.id;
		$http.put('/api/foodstore/'+id, $scope.food).success(function(response){
			window.location.href='#/foodstore';
		});
	}

	$scope.removeFoodStore = function(id){
		$http.delete('/api/foodstore/'+id).success(function(response){
			window.location.href='#/foodstore';
		});
	}
}]);