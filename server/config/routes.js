var Users = require('./../controllers/users.js')
var Bids = require('./../controllers/bids.js')

module.exports = function(app){

	app.get('/users', function(req, res){
		Users.index(req, res);
	})

	app.post('/users', function(req, res){
		Users.create(req, res);
	})

	app.get('/userSession', function(req, res){
		res.json(req.session.name);
	})

	app.post('/bids', function(req, res){
		Bids.create(req, res);
	})

	app.get('/bids', function(req, res){
		Bids.index(req, res);
	})

	app.delete('/bids', function(req, res){
		Bids.delete(req, res);
	})
}