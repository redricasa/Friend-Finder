var path = require('path');
// A GET Route to /survey which should display the survey page.
module.exports = function (app){
    app.get("/survey", function(request, response){
        response.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

};
// A default, catch-all route that leads to home.html which displays the home page.
//TO DO