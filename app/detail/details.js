(function() {
  'use strict';
	angular.module('caracol.detail', [ ])

	.controller('detailCtrl', detail)

	detail.$inject = ['$scope', '$stateParams', '$http', '$rootScope'];

	function detail($scope, $stateParams, $http, $rootScope){
		
		$scope.title = $rootScope.replaceValue($stateParams.title);

		$http.get('../assets/data.json')
		    .then(function(response) {
		        $scope.info = response.data;
		    });

	}

})();