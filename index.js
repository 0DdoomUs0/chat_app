var app = require('express')();
var http = require('http').Server(app);

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get("/style.css", function(req, res){
    res.sendFile(__dirname + '/style.css');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});