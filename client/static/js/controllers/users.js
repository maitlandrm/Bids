myAppModule.controller('usersController', function(userFactory, $location){

	var _this = this;

	function getUsers(){
		userFactory.index(function(users){
			_this.users = users;
			
		})
	}
	getUsers();

	function getSession(){
		userFactory.session(function(user){
			_this.user = user;
			console.log(_this.user);
		})
	}
	getSession();

	this.create = function(){
		// console.log(this.new_user);
		userFactory.create(this.new_user, function(user){
			console.log(user);
			//redirect to the main page
			$location.path('/bids')

		})
	}
})