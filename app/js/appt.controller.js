// Appointment Controller : handles appt ops


'use strict';

app.controller('apptCtrl',
function($scope,$filter){		
		
	$scope.types=['Regular','Special'];
	$scope.names=[];
	$scope.progress='Adding';
	$scope.times=false;
	
	this.isOpen = false;
	
	$scope.addNames=function(){
		$scope.names.push($scope.apptName);
		$scope.apptName='';
		success("addName");
	}
	
	$scope.timings=function(){
		
		success($scope.apptTime);
		
		if($scope.apptTime==''){
			$scope.massTime.show=false;
		}
		else{
			
			$scope.massTime.show=true;
			if($scope.apptType==REGULAR){
				
				$scope.massTime.timeList=['06:00 AM','07:00 AM','08:00 AM','06:15 PM'];
				$scope.massTime.toast='Select from below options:';
			}
			else{
				$scope.massTime.timeList=[];
				if($scope.massTime.timeList.length==0)
				{	$scope.massTime.toast='No options available below';
				}
				else
				{
					$scope.massTime.toast='Select from below options:';
				}
				
				
			}
		}
	}
	
	$scope.updateApptTime = function(){
		success($scope.massTime.selectedTime+" vs the "+$scope.apptTime);
		$scope.apptTime = $scope.massTime.selectedTime;
	}
	
	
	$scope.removeName=function(name){
		
		for (var i=$scope.names.length-1; i>=0; i--) {
			if ($scope.names[i] === name) {
				$scope.names.splice(i, 1);
				success("removeName");
				break;
			}
		}
		
	}
	
	$scope.setAppt=function(){
		//check username and password
		
		var fmtDate=$filter('date')($scope.apptDate,"dd/MM/yy");
		var status=false;
		success(fmtDate);
		/*
		$http.post('/appointment',  
		{ 
		'sign' : $scope.apptSign,
		'date' : $scope.apptDate,
		'type' : $scope.apptType,
		'time' : $scope.apptTime,
		'names' : $scope.names				
		}).
		then(function(response){
		
			if(response.data['result']=='success'){
				var status=true;
			}
		
		
		});
		*/
		//true then set auth to true
		status=true;
		if(status==true){		
		
			
			//debug
			success("appt");
			$scope.progress='Added';
			
		}
		else{
			error("appt");
		}
	}
	
	$scope.reset = function(){
		
			$scope.progress='Adding';
			$scope.names=[];
			$scope.apptDate='';
			$scope.apptTime='';
			$scope.apptType='';			
			$scope.massTime.selectedTime='';
			$scope.massTime.show=false;
	}
		
}
);
