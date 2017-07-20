angular.module('headerCtrl', []).controller('headerController', function($scope, $rootScope, $http) {
	//get restaurants
    	$http({
    method : "GET",
    url : "http://localhost:3000/resturants"
  }).then(function mySuccess(response) {
      $scope.allRestaurants = response.data;
    }, function myError(response) {
      $scope.allRestaurants = response.statusText;
  });

    $scope.getName = function(name){
        $rootScope.restaurantName = name;
    }

    // log in
	$scope.loginform = false;
	$scope.login = function(){
		console.log($scope.user);
		//clear form
		var form = document.getElementById("signIn");
		form.reset();
		//close pop up
		$scope.loginform = !$scope.loginform;

		 $http({
        url: 'http://localhost:3000/api/login',
        method: "POST",
        data: $scope.user 
        })
        .then(function(response) {
            //success
            console.log(response);
            document.getElementById('loginButton').style.display = 'none';
            document.getElementById('profileButton').style.display = 'block';
         }, 
         function(response) { // optional
            // failed
            console.log(response);
        });
	}

	//toggle login button b/w open, register, close
	$scope.loginToggle = function(){
		$scope.loginform = !$scope.loginform;
		if($scope.newUser){
			$scope.newUser = false;
		}
	}

    // register new user
	$scope.newUser = false;
	$scope.register = function(){
		console.log($scope.user);
		//clear form
		var form = document.getElementById("newUser");
		form.reset();
		//close pop up
		$scope.newUser = !$scope.newUser;

        //post to db
	   $http({
        url: 'http://localhost:3000/api/signup',
        method: "POST",
        data: $scope.user 
        })
        .then(function(response) {
            //success
            console.log(response);
         }, 
         function(response) { // optional
            // failed
            console.log(response);
        });

        //log in after registering
        $scope.login();
        $scope.loginform = false;
	}


});

