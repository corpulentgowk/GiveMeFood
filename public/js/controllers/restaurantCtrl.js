 var menu = angular.module('restaurantCtrl', []);

 menu.controller('restaurantController', function($scope, $http, $rootScope) {
	var u = "http://localhost:3000/resturant/" + $rootScope.restaurantName;
	$http({
    method : "GET",
    url : u
  }).then(function mySuccess(response) {
      $scope.selectedRestaurant = response.data;
      console.log($scope.selectedRestaurant);
    }, function myError(response) {
      $scope.selectedRestaurant = response.statusText;
  });

});

