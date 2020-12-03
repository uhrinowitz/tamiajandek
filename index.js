// SETTING UP THE SERVER
var express=require("express");
var app=express();
var server=require("http").Server(app);
let appPort = process.env.PORT || 4200;

// FILE SERVER SECTION
app.get('/', (req, res) => {  
    res.sendFile(__dirname + 'tami.html');


    
})
server.listen(appPort);