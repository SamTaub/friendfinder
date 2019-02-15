//Require path module
var path = require('path');
//Export this file for use in other files
module.exports = function(app){
    //Send the user to the survey when the path is "/survey"
    app.get("/survey", function (req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //Direct user to the home page for all other path requests.
    app.get("*", function (req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};