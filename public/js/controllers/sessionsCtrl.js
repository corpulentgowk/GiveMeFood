angular.module('sessionsCtrl', []).controller('sessionsController', function($scope, $rootScope, $http) {
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
        var form = document.getElementById("signIn");
		 $http({
        url: 'http://localhost:3000/api/login',
        method: "POST",
        data: $scope.user 
        })
        .then(function(response) {
            //success
            $scope.current_user = response.data;
            console.log($scope.current_user);

            // validate login
             $http({
                method : "GET",
                url : "http://localhost:3000/api/current_user"
              }).then(function mySuccess(response) {
                    document.getElementById('loginButton').style.display = 'none';
                    document.getElementById('profileButton').style.display = 'block';
                    document.getElementById('profileButton').innerHTML = $scope.user.email;
                    //clear form
                    form.reset();
                    //close pop up
                    $scope.loginform = !$scope.loginform;
                }, function myError(response) {
                    //clear form
                    form.reset();
                    //shake form
                    document.getElementById('signIn').classList.add('shake');
                    document.getElementById('loginMessage').innerHTML = "Email:  Incorrect Login!";
              });



            //$('#buttonRow').append('<h2 style="display: inline-block">Welcome {{ user.firstName }}<h2>');
         }, 
         function(response) { // optional
            // failed
            // console.log(response);
        });

	}

    //logout
    $scope.logout = function(){
        $http({
        url: 'http://localhost:3000/api/logout',
        method: "GET",
        })
        .then(function(response) {
            //success
            console.log(response);
            document.getElementById('loginButton').style.display = 'block';
            document.getElementById('profileButton').style.display = 'none';
         }, 
         function(response) { // optional
            // failed
            console.log(response);
        });
    }

    // reset form every time toggle Login button
    function resetForm(){
    document.getElementById('loginMessage').innerHTML = "Email:";
    document.getElementById('signIn').classList.remove('shake');
    };

	//toggle login button b/w open, register, close
	$scope.loginToggle = function(){
		$scope.loginform = !$scope.loginform;
        resetForm();
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

