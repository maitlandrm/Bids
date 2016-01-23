var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');

module.exports = {

	index: function(req, res){
		Bid.find({}, function(err, bids){
			if(err){
				console.log(err)
			} else {
				res.json(bids);
			}
		})
	},

	create: function(req, res){
		console.log( "in bids server controller")
		Bid.find({product: req.body.product}, function(err, bids){
			if(err){
				console.log("no good" + err);
			} else if (bids.length > 0){
				for(var i = 0; i < bids.length; i++){
					if(req.body.amount < bids[i].amount){
						res.send(false);
					} else if(!err) {
						console.log("saving");
						var bid = new Bid(req.body);
						bid.save(function(err){
							if(err){
								res.send(err);
							} else {
								console.log("success!");
								res.send(true);
							}
						})
					}

				} 
			} else{
				console.log("saving");
				var bid = new Bid(req.body);
				bid.save(function(err){
					if(err){
						res.send(err);
					} else {
						console.log("success!");
						res.json(true);
					}
				})
			}
		})
	},

	delete: function(req, res){
		Bid.remove({}, function(err){
			res.json(true);
		})
	}


}