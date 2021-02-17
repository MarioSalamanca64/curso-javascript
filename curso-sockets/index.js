var express = require('express');
var app = express();
var serve = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(6677,function(){
    console.log('Servidor esta funcionando en http://localhost:6677');    
});