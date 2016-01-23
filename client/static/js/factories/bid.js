myAppModule.factory('bidFactory', function($http){
	return{


		index: function(callback){
			$http.get('/bids').success(function(bids){
				callback(bids);
			})
		},
		create: function(bid, callback){
			console.log("in bid factory");
			console.log(bid);
			$http.post('/bids', bid).success(function(error){
				callback(error);
			})
		},

		delete: function(callback){
			$http.delete('/bids').success(function(){
				callback();
			})
		}
	}
})