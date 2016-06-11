// Require our dependencies
var express = require('express'),
  exphbs = require('express-handlebars'),
  http = require('http'),
  mongoose = require('mongoose'),
  routes = require('./routes'),
  config = require('./config'),

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 3080;

// Connect to our mongo database
mongoose.connect('mongodb://localhost/nyt-react');

app.get('/', routes.index);

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});