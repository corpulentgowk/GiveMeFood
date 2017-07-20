 var menu = angular.module('restaurantCtrl', []);

 menu.controller('restaurantController', function($scope, $http, $rootScope) {
	var u = "http://localhost:3000/resturant/" + $rootScope.restaurantName;
	$http({
    method : "GET",
    url : u
  }).then(function mySuccess(response) {
      $scope.selectedRestaurant = response.data;
    }, function myError(response) {
      $scope.selectedRestaurant = response.statusText;
  });

});

menu.directive('loadMenu', function(){
	return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: '/views/templates/menu.html' 
  }; 
});

menu.directive('loopMenu', function(){
	return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: '/views/templates/loopMenu.html' 
  }; 
});

menu.directive('loadItems', function(){
	return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: '/views/templates/items.html' 
  }; 
});