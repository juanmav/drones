const udp = require('dgram');
const server = udp.createSocket('udp4');
const { rawToJSON } = require('./convertData');
const DroneList = require('../models/DroneList');

server.on('error',function(error){
    console.log('Error: ' + error);
    server.close();
});

server.on('message',function(buffer,info){
    let message = buffer.toString();
    console.log(`Received ${buffer.length} bytes from ${info.address}:${info.port}. Message: ${message}`);

    try{
        let rawDrone = rawToJSON(message);
        let droneInstance = DroneList.addOrUpdateDrone(rawDrone);
        console.log(`Drone id: ${droneInstance.id} updated! stationary: ${droneInstance.stationary}, speed:  ${droneInstance.speed}`);
    } catch (e) {
        console.log(e);
    }

});

server.on('listening',function(){
    let address = server.address();
    console.log('Server is listening at port: ' + address.port);
    console.log('Server ip :' + address.address);
    console.log('Server is IP4/IP6 : ' + address.family + '\n');
});

module.exports = server;