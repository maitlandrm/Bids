var fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/redBeltExam');

var modelsPath = __dirname + '/../models';

fs.readdirSync(modelsPath).forEach(function(filename){
	if(filename.indexOf('.js') >0){
		require(modelsPath + '/' + filename);
	}
})