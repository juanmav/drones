const udp = require('dgram');
const server = udp.createSocket('udp4');


server.on('error',function(error){
    console.log('Error: ' + error);
    server.close();
});

server.on('message',function(buffer,info){
    let message = buffer.toString();
    console.log(`Received ${buffer.length} bytes from ${info.address}:${info.port}. Message: ${message}`);
});

server.on('listening',function(){
    let address = server.address();
    console.log('Server is listening at port: ' + address.port);
    console.log('Server ip :' + address.address);
    console.log('Server is IP4/IP6 : ' + address.family + '\n');
});

module.exports = server;