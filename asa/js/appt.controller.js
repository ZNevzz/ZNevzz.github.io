// Appointment Controller : handles appt ops


'use strict';

app.controller('addApptCtrl',
function($scope,$filter,$http){		
		
	$scope.types=['Regular','Special'];
	$scope.names=[];
	$scope.progress='Adding';
	
	var getTime=[];
	
	$scope.selectDate=function(){
		success($scope.apptDate);
		
		// HTTP GET time
		
				
		getTime=['06:00 AM','07:00 AM','08:00 AM','06:15 PM'];
		
		var day = $filter('date')($scope.apptDate,"fullDate");
		var url = '/timelist/'+day[0]+day[1]+day[2];
		success(url);
		
		/* $http.get().
        then(function(response) {
            //DO NOTHING
			
        });	
		*/
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
		//success($scope.massTime.selectedTime+" vs the "+$scope.apptTime);
		$scope.apptTime = $scope.massTime.selectedTime;
	}
	
	$scope.addNames=function(){
		$scope.names.push($scope.apptName);
		$scope.apptName='';
		success("addName");
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
		
		$http.post('/appointment',  
		{ 
		'sign' : $scope.apptSign,
		'date' : fmtDate,
		'type' : $scope.apptType,
		'time' : $scope.apptTime,
		'names' : $scope.names				
		}).
		then(function(response,status){
			console.log(response.data);
			if(response.data['result']=='success'){
				status=true;
			}
		
		
		});
		
		
		//true then set auth to true
		if(status==true){		
		
			
			//debug
			success("appt");
			$scope.progress='Added';
			
		}
		else{
			error("appt");
			$scope.progress='Something went wrong! Please try again to Add'
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





app.controller('evalApptCtrl',
function($scope,$filter,$http){
 	
	$scope.types=['Regular','Special'];
	$scope.names=[];
	$scope.absent=[];
	$scope.progress='Evaluating';
	
	var result=null;
	var getTime=[];
	
	
	
	
	
	$scope.selectDate=function(){
		success($scope.apptDate);
		
		// HTTP GET time
		
				
		getTime=['06:00 AM','07:00 AM','08:00 AM','06:15 PM'];
		
		var day = $filter('date')($scope.apptDate,"fullDate");
		var url = '/timelist/'+day[0]+day[1]+day[2];
		success(url);
		
		/* $http.get().
        then(function(response) {
            //DO NOTHING
			
        });		 
*/
		
		
		// store results
		result = {
			'date':'07/07/17',
			'schedule':[{'time':'07:00 AM','type':'Regular','names':['Ben','Ten','When','Hen']},
						{'time':'06:00 AM','type':'Regular','names':['Pen','Gwen','Ren','Men']},
						{'time':'09:00 AM','type':'Special','names':['Pen','Gwen','Ren','Men']}
			]
		
		}
		
		var selectedDate = $filter('date')($scope.apptDate,"dd/MM/yy");
		var resultDate = '#'+result.date;
		
		error(selectedDate+" and "+resultDate);
		if(result.date!=selectedDate){
			result=null;
		}
						
		
	}
	
	$scope.selectType=function(){
		
		// check if Object is not empty
		//success(result.date);
		
		if(result!=null){
			// Regular mass filter
			if($scope.apptType==REGULAR){
				
				for (var i=result.schedule.length-1; i>=0; i--) {
					if(result.schedule[i].type==REGULAR){
						$scope.massTime.timeList.push(result.schedule[i].time);
						$scope.massTime.toast='Select from below options:';
						$scope.massTime.show=true;
					}
				}
				
			}
			
			
			else {
				
				for (var i=result.schedule.length-1; i>=0; i--) {
					if(result.schedule[i].type!=REGULAR){
						$scope.massTime.timeList.push(result.schedule[i].time);
						$scope.massTime.toast='Select from below options:';
						$scope.massTime.show=true;
					}
				}
				
			}
		}
		
	}
	
	$scope.timings=function(){
		
		//success($scope.apptTime);
		
		if($scope.apptTime==''){
			$scope.massTime.show=false;
		}
		
		else{
			
			$scope.massTime.show=true;
			if($scope.apptType==REGULAR){
				
				$scope.massTime.timeList=getTime;
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
		//success($scope.massTime.selectedTime+" vs the "+$scope.apptTime);
		$scope.apptTime = $scope.massTime.selectedTime;
		if(result!=null){
			
			for (var i=result.schedule.length-1; i>=0; i--) {
				if(result.schedule[i].time==$scope.apptTime){
					$scope.names=result.schedule[i].names;
				}
			}
			
		}
	}
	
	$scope.addNames=function(){
		$scope.names.push($scope.apptName);
		$scope.apptName='';
		success("addName");
	}
	
	$scope.removeName=function(name,event,arr){
		
		
		var el = angular.element(event.target);
		var className = el.attr("class");
			
		// CHECK NAME in NAMES
		
		if(arr=='present'){
		
			for (var i=$scope.names.length-1; i>=0; i--) {
				if ($scope.names[i] === name) {
					// TO MARK ABSENT
					
						el.removeClass('fa fa-check').addClass("fa fa-times");
						el.css("color","red");
						$scope.names.splice(i, 1);
						$scope.absent.push(name);
						
						
					
					
					break;
				}
			}
		}
		else if(arr=='absent'){
			
			for (var i=$scope.absent.length-1; i>=0; i--) {
				if ($scope.absent[i] === name) {
					
					// TO MARK PRESENT
					
						el.removeClass('fa fa-times').addClass("fa fa-check");
						el.css("color","green");
						$scope.absent.splice(i, 1);
						$scope.names.push(name);
					
					
					break;
				}
			}
			
		}
		
	}
		
	$scope.setAppt=function(){
		//check username and password
		
		var fmtDate=$filter('date')($scope.apptDate,"dd/MM/yy");
		var status=false;
		success(fmtDate);
		
		
		
		
		
		/*
		$http.post('/evaluate',  
		{ 
		'sign' : $scope.apptSign,
		'date' : fmtDate,
		'type' : $scope.apptType,
		'time' : $scope.apptTime,
		'names' : $scope.names,	
		'absent' : $scope.absent,	
		}).
		then(function(response,status){
			console.log(response.data);
			if(response.data['result']=='success'){
				status=true;
			}
		
		
		});
		
		*/
		
		//true then set auth to true
		if(status==true){		
		
			
			//debug
			success("appt");
			$scope.progress='Evaluated';
			
		}
		else{
			error("appt");
			$scope.progress='Something went wrong! Please try again to Evaluate'
		}
	}
	
	$scope.reset = function(){
		
			$scope.progress='Evaluate';
			$scope.names=[];
			$scope.absent=[];
			$scope.apptDate='';
			$scope.apptTime='';
			$scope.apptType='';			
			$scope.massTime.selectedTime='';
			$scope.massTime.timeList=[];
			$scope.massTime.show=false;
	}
	
}
); 

