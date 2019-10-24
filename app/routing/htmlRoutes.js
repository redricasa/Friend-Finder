var path = require('path');
// A GET Route to /survey which should display the survey page.
module.exports = function (app){
    app.get("/survey", function(request, response){
        response.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    // A default, catch-all route that leads to home.html which displays the home page.
    app.get("/",function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"))
    })
    app.get("/photoes/:image",function(req, res){
        res.sendFile(path.join(__dirname + "/../../static/photoes/" + req.params.image))
    })
    app.get("/style/:css",function(req, res){
        res.sendFile(path.join(__dirname + "/../Style/" + req.params.css))
    })
};

