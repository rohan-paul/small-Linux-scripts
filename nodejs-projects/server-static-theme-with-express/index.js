
// This file will show me the html theme directly as soon as I open the home page by starting up the server with $ node index.js

var express = require('express');
// var serveIndex = require('serve-index');
var serveStatic = require('serve-static');
// var serve = serveStatic('public/ftp');
var path = require('path');


var app = express();




// This line alone (with the .listen ofcourse) will serve the static theme templated-hielo
app.use(express.static(path.join(__dirname, 'public/templated-hielo')));

app.listen(3232, function(){
    console.log("Magic is on the way on route 3232");
});