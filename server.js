//Dependencies
const express = require("express");
const expressHandlebars = require("express-handlebars");

const PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();

app.use(express.static(__dirname + "/public"));

app.unsubscribe(router);

app.listen(PORT, function() {
  console.log("http://localhost:" + PORT);
});
