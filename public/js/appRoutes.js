angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'sessionsController'
		})

		.when('/restaurant', {
			templateUrl: 'views/restaurant.html',
			controller: 'restaurantController'
		})

		.when('/api/logout', {
			redirectTo: '/'
		});

	

	$locationProvider.html5Mode(true);

}]);