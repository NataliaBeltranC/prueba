
(function() {
  'use strict';
	angular.module('caracol', [ 'caracol.router', 'caracol.home', 'caracol.detail' ])

	.run(configuration)
	.directive('slick', slick)

	configuration.$inject = ['$rootScope'];
	slick.$inject = ['$timeout'];

	function configuration($rootScope){

		$rootScope.replaceValue = function(value){
			value = value.replace(/^\s+|\s+$/g, '');
			value = value.toLowerCase();
			  
			var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
			var to   = "aaaaeeeeiiiioooouuuunc------";
			for (var i=0, l=from.length ; i<l ; i++) {
				value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
			}

			value = value.replace(/[^a-z0-9 -]/g, '')
				.replace(/\s+/g, '-')
				.replace(/-+/g, '-'); 

			return value
		}
	}

	function slick($timeout){
		return {  
	        restrict: 'A',  
	        link: function (scope, element, attrs) { 
	            $timeout(function() { 
	                $(element).slick({
					  	dots: true,
						  infinite: true,
						  speed: 300,
						  slidesToShow: 1
					  });
	                console.log('termino');
	            }, 200);
	        }  
	    };  
	}

})();