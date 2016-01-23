var myAppModule = angular.module("myApp", ["ngRoute"]);

myAppModule.config(function ($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: './../partials/login.html',
		controller: 'usersController',
		controllerAs: 'usersCtrl'
	})

	.when('/bids', {
		templateUrl: './../partials/bid_page.html',
		controller: 'bidsController',
		controllerAs: 'bidsCtrl'
	})

	.when('/result', {
		templateUrl: './../partials/result.html',
		controller: 'bidsController',
		controllerAs: 'bidsCtrl'
	})
})