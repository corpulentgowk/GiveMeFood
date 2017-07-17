angular.module('restaurantCtrl', []).controller('restaurantController', function($scope, $http, $rootScope) {
	var u = "http://localhost:3000/resturant/" + $rootScope.restaurantId;
	$http({
    method : "GET",
    url : u
  }).then(function mySuccess(response) {
      $scope.selectedRestaurant = response.data;
    }, function myError(response) {
      $scope.selectedRestaurant = response.statusText;
  });

//CHECK WHY URI DOESNT WORK


});