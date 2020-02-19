var express = require('express');
var app = express();

// define routes here..

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});


app.get("/",function(req,res){
console.log("hi");
res.send("hello  reliance jio");


})