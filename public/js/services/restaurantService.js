angular.module('restaurantService',[]).factory('allRestaurants', function($http) {
	return {
		get: function(){
			$http.get("http://localhost:3000/resturants");
		}
	}
});

