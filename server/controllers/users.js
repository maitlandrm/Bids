var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

	index: function(req, res){
		User.find({}, function(err, users){
			if(err){
				res.send(err);
			} else {
				res.json(users);
			}
		})
	},

	create: function(req, res){
		User.find({name: req.body.name}, function(err, user){
			if(err){
				res.send(err);
			} else if(user){
				console.log("found a match");
				req.session.name = req.body.name;
				res.json(req.session.name);
			} else {
				console.log("saving new user");
				var user = new User(req.body);
				user.save(function(err, user){
					if(err){
						console.log(err + "can't create new user")
					} else {
						req.session.name = user.name;
						res.json(req.session.name);
					}
				})
			}
		})
	}

}