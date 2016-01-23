var express = require("express");
var session = require('express-session');
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({ 
	secret: 'keyboard cat', 
	resave: false,
	cookie: { maxAge: 60000 }}
))

app.use(express.static(__dirname + '/client'));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log("to 8000 and beyond")
})