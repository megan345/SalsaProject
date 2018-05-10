var fs = require("fs");

var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    var jsondata = fs.readFileSync('data.json');

    var data = JSON.parse(jsondata);

    res.render("home");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening...!");
});