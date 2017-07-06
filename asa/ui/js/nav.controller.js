// Navigation controller : adds dynamic content to navigation main headings & redirection within app

'use strict';

app.controller('navCtrl',
function($scope,$rootScope){
 	
	$scope.clickOptions= function(op,name){
		
		// add Appointment
		if(op=='add' && name=='Appointment'){
			
			$rootScope.addAppt=!$rootScope.addAppt;
			
			$rootScope.evalAppt=false;
			$rootScope.viewScore=false;
			$rootScope.addScore=false;
			$rootScope.viewAttd=false;
			$rootScope.addAttd=false;
		}
		// evaluate Appointment
		else if(op=='evaluate' && name=='Appointment'){
			
			$rootScope.evalAppt=!$rootScope.evalAppt;
			
			
			$rootScope.addAppt=false;
			$rootScope.viewScore=false;
			$rootScope.addScore=false;
			$rootScope.viewAttd=false;
			$rootScope.addAttd=false;
		}
		// add Attendance
		else if(op=='add' && name=='Attendance'){
			
			$rootScope.addAttd=!$rootScope.addAttd;
			
			$rootScope.evalAppt=false;
			$rootScope.addAppt=false;
			$rootScope.viewAttd=false;
			$rootScope.viewScore=false;
			$rootScope.addScore=false;
		}
		// view Attendance
		else if(op=='view' && name=='Attendance'){
			
			$rootScope.viewAttd=!$rootScope.viewAttd;
			
			$rootScope.evalAppt=false;
			$rootScope.addAppt=false;
			$rootScope.addAttd=false;			
			$rootScope.viewScore=false;
			$rootScope.addScore=false;
		}
		// add to Scoreboard
		else if(op=='add to' && name=='Scoreboard'){
			
			$rootScope.addScore=!$rootScope.addScore;
			
			$rootScope.evalAppt=false;
			$rootScope.addAppt=false;
			$rootScope.viewScore=false;
			$rootScope.viewAttd=false;
			$rootScope.addAttd=false;
			
		}
		// view Scoreboard
		else if(op=='view' && name=='Scoreboard'){
			
			$rootScope.viewScore=!$rootScope.viewScore;
			
			$rootScope.evalAppt=false;
			$rootScope.addAppt=false;
			$rootScope.addScore=false;
			$rootScope.viewAttd=false;
			$rootScope.addAttd=false;
		}
		
	}
	
	$scope.clickAppt= function(){
		$scope.navigation=true;
		$scope.option = {'name':'Appointment','options':['add','evaluate']};
	} 
	
	$scope.clickAttd= function(){
		$scope.navigation=true;
		$scope.option = {'name':'Attendance','options':['add','view']};
	} 
	
	
	$scope.clickScore= function(){
		$scope.navigation=true;
		$scope.option = {'name':'Scoreboard','options':['add to','view']};
	} 
	
	
	

}
); 