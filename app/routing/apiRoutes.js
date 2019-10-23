// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
//TO DO

var friends = require("../data/friends.js");
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
module.exports = function(app){
    app.get("/api/friends", function(request, response){
        response.json(friends);
    });
    app.post("/api/friends", function(req, res){

        var bestMatch = {
            name: "",
            photo: "",
            difference: 100
        };
        var userData = req.body;
        var userScores = userData.scores;
        //this stores the difference between teh user's scores and friends scores
        var totaldiff = 0;
        for (var i = 0; i < friends.length; i++ ){
            totaldiff = 0;
            for (var j = 0; j < friends[i].scores[j]; j++){
                totaldiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                if (totaldiff <= bestMatch.difference){
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.difference = totaldiff;
                }
            }
        }
        friends.push(userData);
        res.json(bestMatch);
    })
}