// Express is a flexible Node.js web application framework that provides a robust set of features for web applications
var express = require("express");

// Create a new express application
var app = express();

// Parse incoming request bodies (req.body)
var bodyParser = require("body-parser");

// Loads environment variables from a .env file into process.env
require('dotenv');
const route = require("./routes/route");

// Parses the text as URL encoded data and exposes the resulting object on req. body
app.use(bodyParser.urlencoded({
    extended: true
}));

// Returns middleware that only parses json
app.use(bodyParser.json())

// Mount middleware for all routes of the app
app.use(route);

// Define port
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Express running");
});