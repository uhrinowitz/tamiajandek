// SETTING UP THE SERVER
var express=require("express");
var app=express();

var server=require("http").Server(app);
var io = require('socket.io')(server);
let appPort = process.env.PORT || 4200;

// FILE SERVER SECTION
app.get('/', (req, res) => {  
    res.sendFile(__dirname + '/tami.html');
})
app.get('/style.css', (req, res) => {
	res.sendFile(__dirname + "/" + "style.css");
  });
server.listen(appPort);