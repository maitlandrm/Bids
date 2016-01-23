myAppModule.factory('userFactory', function($http){

	var session_user = {};
	var logged_in = false;

	return{

		index: function(callback){
			$http.get('/users').success(function(users){
				callback(users);
			})
		},

		create: function(user, callback){
			$http.post('/users', user).success(function(user){
				session_user = user
				logged_in = true;
				callback(session_user);
			})
		},

		session: function(callback){
			$http.get('/userSession').success(function(user){
				session_user = user;
				callback(session_user);
			})
		},

		show: function(callback){
			callback(session_user);
		},

		destroy: function(callback){
			console.log("factory destroy");
			session_user ={}
			logged_in = false;
			callback()
		}
	}
})