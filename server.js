var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 27017;

var app = express();

var routes = require("./routes");

app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout:"main" }));
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(routes);



app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
  });
  