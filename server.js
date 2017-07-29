

var express = require('express');
app = express();

var PORT = process.env.PORT || 8080;

var bodyParser = require('body-parser');


//**************************************************
// code copied from npm body-parser
//**************************************************

// create application/json parser 
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// parse various different custom JSON types as JSON 
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }))

// *****  end npm body-parser copied code *****************

require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
});