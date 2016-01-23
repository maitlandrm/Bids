myAppModule.controller('bidsController', function(userFactory, bidFactory, $location){

	var _this = this;

	function getSession(){
		userFactory.session(function(user){
			_this.user = user;
		})
	}
	getSession();

	this.destroy = function(){
		userFactory.destroy(function(){
			$location.path('/');
		})
	}

	function getBids(){
		bidFactory.index(function(bids){
			_this.nutella = [];
			_this.puppy = [];
			_this.bunny = [];
			console.log(bids);
			for(var i = 0; i < bids.length; i++){
				if(bids[i].product == "nutella"){
					_this.nutella.push(bids[i]);
				} else if(bids[i].product == "puppy"){
					_this.puppy.push(bids[i]);
				} else if(bids[i].product == "bunny"){
					_this.bunny.push(bids[i]);
				}
			}
		})
	}
	getBids()

	this.nutella_create = function(){
		if(this.new_nutella_bid == undefined){
			this.error = "Required";
		} else {

		this.new_nutella_bid.product = "nutella"
		this.new_nutella_bid.user = _this.user
		bidFactory.create(this.new_nutella_bid, function(error){
			_this.new_nutella_bid = {};
			if(error == false){
					console.log(error);
				_this.error = "Must be higher than last amount";
			} else {
				getBids();
			}
		})
		}

	}

	this.bunny_create = function(){
		if(this.new_bunny_bid == undefined){
			this.error = "Required";
		} else {
			this.new_bunny_bid.product = "bunny"
			this.new_bunny_bid.user = _this.user
				bidFactory.create(this.new_bunny_bid, function(error){
					_this.new_bunny_bid = {};
					if(error == false){
						console.log(error);
					_this.error = "Must be higher than last amount";
				} else {
					getBids();
				}
				
			})
			
		}

	}

	this.puppy_create = function(){
		if(this.new_puppy_bid == undefined){
			this.error = "Required"
		} else {

			this.new_puppy_bid.product = "puppy"
			this.new_puppy_bid.user = _this.user
				bidFactory.create(this.new_puppy_bid, function(error){
					_this.new_puppy_bid ={};
					if(error == false){
						console.log(error);
					_this.error = "Must be higher than last amount";
				} else {
					getBids();
					
				}
				
			})
		}
	}

	this.end_bid = function(){
		getBids();
		if(_this.nutella.length < 1 || _this.bunny.length <1 || _this.puppy.length < 1){

			_this.error = "Cannot end the bid. Product(s) have yet to be bid on."
		} else {
			$location.path('/result');
		}
	}

	this.delete = function(){
		bidFactory.delete(function(){
			$location.path('/bids');
		})
	}


})