// Login Controller : handles login ops

'use strict';

app.controller('loginCtrl',
function($scope,$http){
		
	
	$scope.error={'username':false,'password':false};
	
	$scope.authenticate=function(){
		
		//console.log($scope.loginObj.username+" - "+$scope.loginObj.password);
		
		/* $http.get('/login').
        then(function(response) {
            //DO NOTHING
			
        });		 */	
		
		
		/* UI TEST */
		/*
		if($scope.loginObj.username=='zn' && $scope.loginObj.password=='zz')							
		{
			
			
			$scope.loginObj.status=false;
			$scope.error.username=$scope.error.password=false;
			success("authentication");
			
			
		}		
		else if($scope.loginObj.username=='zn'){
			
			$scope.error.username=false;
			$scope.error.password=true;
			error("authentication in password");
			
		}
		else if($scope.loginObj.password=='zz'){
			
			$scope.error.password=false;
			$scope.error.username=true;
			error("authentication in username");
			
		}
		else{
			$scope.error.username=true;
			$scope.error.password=true;
			error("authentication in username and password");
		}
		
		
		*/
		
		///*
		$http.post('/login/auth',  { 'username' : $scope.loginObj.username,'password': $scope.loginObj.password}).
		then(function(response){
			//DO 
			
			success(response.data['result']);
			
			if(response.data['result']=='success'){
				
				$scope.auth=true;
				$scope.loginObj.status=false;
				$scope.error.username=$scope.error.password=false;
				success("authentication");
			}
			else if(response.data['result']=='username'){
												
				$scope.error.username=false;
				$scope.error.password=true;
				error("authentication in password");
			}
			else if(response.data['result']=='password'){
												
				$scope.error.password=false;
				$scope.error.username=true;
				error("authentication in username");
			}
			else if(response.data['result']=='failed'){
												
				$scope.error.username=true;
				$scope.error.password=true;
				error("authentication in username and password");
			}
			
		});
			
		//*/
		
	}
	
}
);
