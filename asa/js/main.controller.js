// Main Controller : has widest scope compared to other controllers

'use strict';

app.controller('mainCtrl',
function($scope, $rootScope){
	
	//$scope.sessionRole=-1;
	
	//global variables
	$scope.version='2.3';
	$scope.mode='testing';
	$rootScope.loginShow=$rootScope.addAppt=$rootScope.evalAppt=$rootScope.addAttd=$rootScope.viewAttd=$rootScope.viewScore=$rootScope.addScore=false;
	$scope.navShow=$scope.about=$scope.navigation=$scope.showTimingList=false;
	
	$scope.loginObj={'status':true,'username':'','password':''};
	$scope.massTime={'show':false,'timeList':[],'selectedTime':'',toast:''};
	
	$scope.clickLogin=function(){
		
		success($scope.loginObj.status);
		success(!$scope.loginObj.status);
		$scope.loginShow=true;
		$scope.navShow=false;
		$scope.addAppt=false;
		
	}

	$scope.clickNav=function(){

		if(alertLogin($scope)){
			$scope.navShow=true;
			$scope.loginShow=false;
		}
	}
	

}
);