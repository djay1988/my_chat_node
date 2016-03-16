var socket  = require( 'socket.io' );
var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var io      = socket.listen( server );
var port    = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});


io.on('connection', function (socket) {

  socket.on( 'new_chat', function( data ) {
    io.sockets.emit( 'new_chat', {
    	text: data.text,
    	s_id: data.s_id,
    	r_id: data.r_id
    });
  });

  
});
