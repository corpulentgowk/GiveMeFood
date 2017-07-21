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
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);

}]);