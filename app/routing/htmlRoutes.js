var path = require("path");



//************************************
//   GET route to /survey page
//************************************
module.exports = function(app) {
	app.get("/survey", function(req, res){
	res.sendFile(path.join(_dirname+"/../public/survey.html"));
});
//*************************************
//  default USE route to home.html
//*************************************
app.use(function(req, res){
	res.sendFile(path.join(_dirname + "/../public/home.html"));
});


}