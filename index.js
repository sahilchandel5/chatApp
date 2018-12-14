const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
var http = require('http')
const app=express();

app.use(cors());

var server=app.listen(3000,function()
{
	console.log('Open browser at port number 3000');
})


var io=require('socket.io')(server);

io.on('connection',(socket) => {
	
	console.log('new connection made',socket.id);

   socket.on("chat",function(data)
   	{
   		
   		io.sockets.emit('chat',data);
   	});

});
