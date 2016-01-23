var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bidSchema = new Schema({
	amount: Number,
	product: String,
	user: String
})

mongoose.model('Bid', bidSchema);