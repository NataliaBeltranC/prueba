
(function() {
  'use strict';
	angular.module('caracol.home', [ ])

	.controller('homeCtrl', home)

	home.$inject = ['$scope', '$http', '$rootScope'];

	function home($scope, $http, $rootScope){
		$http.get('../assets/data.json')
		    .then(function(response) {
		        $scope.info = response.data;
		    });
	}

})();
