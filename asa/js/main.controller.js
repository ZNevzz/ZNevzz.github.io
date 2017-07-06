// Main Controller : has widest scope compared to other controllers

'use strict';

app.controller('mainCtrl',
function($scope){
	
	//$scope.sessionRole=-1;
	
	//global variables
	$scope.version='1.3';
	$scope.mode='testing';
	$scope.loginShow=$scope.navShow=$scope.about=$scope.navigation=$scope.addAppt=$scope.showTimingList=false;
	
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
	
	$scope.clickAddAppt= function(){
		$scope.addAppt=true;		
		$scope.loginShow=false;
	}

}
);