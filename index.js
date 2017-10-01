var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get("/style.css", function(req, res){
    res.sendFile(__dirname + '/style.css');
});

io.on('connection', function(socket){
    io.emit('chat message', 'user connected');
    var nick = 'anonymous';
    socket.on('chat message', function(msg){
        io.emit('chat message', `${nick}: ${msg}`);
    });
    socket.on('set nick', function(new_nick){
        nick = new_nick;
    });
    socket.on('disconnect', () => {
        io.emit('chat message', `${nick} disconnected`);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});