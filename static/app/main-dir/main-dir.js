import angular from "angular";
import $ from 'jquery';
import {app} from '../app.js';
import '../mainCtrl.js';
import main_template from './template/main-dir.html'

app.directive('mainDir', function(){
	return{
		restrict: 'E',
		replase: false,
		controller: ('mainCtrl'),
		template: main_template,
		link: function(scope, element, attributes){
			scope.password;
			scope.flag = true;
			scope.error = false;
			scope.check = password=>{
				// alert(password);
				scope.request = scope.checkPass(password);
				// scope.flag = false;
				//console.log(scope.request);
				if(scope.request == false){
					scope.error = true;
					// scope.task = false;
					// scope.flag = false;
				}

				if(scope.request != false){
					scope.flag = false;
					scope.error = false;
					scope.task = true;
				}
			}

			scope.back=()=>{
				scope.flag = true;
				scope.task = false;
			}

		}
	}
})