
(function() {
  'use strict';

	angular.module('caracol.router', [ 'ui.router' ])

	.config(settings)

	settings.$inject = ['$stateProvider', '$urlRouterProvider'];


	function settings($stateProvider, $urlRouterProvider){

		$stateProvider
	      .state('home', {
	        url: '/',
	        templateUrl: 'home/home.html',
	        controller: 'homeCtrl'
	      })
	      .state('detail', {
	        url: '/detail/:category/:title',
	        templateUrl: 'detail/detail.html',
	        controller: 'detailCtrl'
	      })

	    $urlRouterProvider.otherwise('/');
	}
})();
