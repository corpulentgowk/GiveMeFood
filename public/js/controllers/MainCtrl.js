angular.module('headerCtrl', []).controller('headerController', function($scope, $rootScope, $http) {
		$http({
    method : "GET",
    url : "http://localhost:3000/resturants"
  }).then(function mySuccess(response) {
      $scope.allRestaurants = response.data;
    }, function myError(response) {
      $scope.allRestaurants = response.statusText;
  });

    $scope.getId = function(id){
        $rootScope.restaurantId = id;
    }

	$scope.loginform = false;
	$scope.login = function(){
		console.log($scope.user);
		//clear form
		var form = document.getElementById("signIn");
		form.reset();
		//close pop up
		$scope.loginform = !$scope.loginform;

		var posting = $http({
            method: 'POST',
            /*posting to /post */
            url: '/api/create/post',
            data: $scope.user,

            processData: false
        })
        posting.success(function (response) {
            /*executed when server responds back*/
            console.log(response);
            $scope.response.data = response;
        });
	}

	//toggle login button b/w open, register, close
	$scope.loginToggle = function(){
		$scope.loginform = !$scope.loginform;
		if($scope.newUser){
			$scope.newUser = false;
		}
	}

	$scope.newUser = false;
	$scope.register = function(){
		console.log($scope.user);
		//clear form
		var form = document.getElementById("newUser");
		form.reset();
		//close pop up
		$scope.newUser = !$scope.newUser;

		var posting = $http({
            method: 'POST',
            /*posting to /post */
            url: '/api/create/post',
            data: $scope.user,

            processData: false
        })
        posting.success(function (response) {
            /*executed when server responds back*/
            console.log(response);
            $scope.response.data = response;
        });
	}


});

