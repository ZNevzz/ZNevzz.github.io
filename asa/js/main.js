// main js helper

'use strict';

console.log("Welcome to main.js");


// init function
var REGULAR = 'Regular';

var app=angular.module('ASA',['ngMaterial', 'ngMessages']);

function success(mod){console.log("Successfully executed!! #"+mod);}
function error(mod){console.log("Oops...Something went wrong!! #"+mod);}
function alertLogin(scope){
	//alert(scope.loginObj.status);
	
	//for UI test env only
	
	///*
	return true;
	//*/
	
	if(scope.loginObj.status){
		alert("Please login using your username & password");		
		return false;
	}
	else{
		return true;
	}
}

// HTTP GET
/* $http.get('/login').
        then(function(response) {
            //DO NOTHING
			
        });		 
*/	

// HTTP POST
/*
$http.post('/login/auth',  { 'username' : $scope.loginObj.username,'password': $scope.loginObj.password}).
		then(function(response){
			//DO NOTHING
		});
*/

/*
function showTimings(){
	// CREATE FILTER AND RETURN Array
	
	// PASS ARRAY TO BELOW Function
	if(timings==null)
	{
		var timings = createDropDownList("demo", "time-list");
	}
	else{
		
	}
}

function getDropDownList(id, name) {
    var combo = $("<select></select>").attr("id", id).attr("name", name);
}

function createDropDownList(times){


    
	combo.append("<option>" + "7 OO PM" + "</option>");
    

    //return combo;
    // OR
    $("#mass-timings").append(combo);
}
*/



