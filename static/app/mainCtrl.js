import angular from "angular";
import $ from 'jquery';
import {app} from './app.js';
import quest from '../../questing.js'


app.controller('mainCtrl', function($scope){
	$scope.data = quest;
	$scope.checkPass = pass=> {
	for (var i= 0; i< $scope.data.length; i++) {
		//console.info('pass',pass, '$scope.data[i]',$scope.data[i])
			if($scope.data[i].pass == pass)
				return $scope.data[i].text;
		}
		return false;
	}
});
var div  = document.getElementsByClassName('container');