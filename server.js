var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true}));
// parse different custom JSON types as JSON
app.use(bodyParser.json({type: 'application/*+json'}))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));

app.use(bodyParser.text({ type: 'text/html' }))
require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes.js")(app)
//creates a route that serves the photoes
app.use( express.static( "photoes"));

app.listen(PORT, function(){
    console.log("app listening on port: " + PORT)
});