const udp = require('dgram');
const sendmessage = udp.createSocket('udp4');
const dotenv = require('dotenv');
const { generateRandomCoordinates }= require('./helpers/helpers');

dotenv.config();

let flipflop = false;

let interval = setInterval(function () {

    const coordinates = generateRandomCoordinates(-34, -35, -58, -59);
    const stringCoordinates = `${coordinates.latitude},${coordinates.longitude}`;

    // Drones 1 moves, drone2 doesnt.
    const toSend = flipflop ? `1,${stringCoordinates}` : "2,15.16305,-118.20511";
    flipflop = !flipflop;

    sendmessage.send(Buffer.from(toSend), parseInt(process.env.UDP_PORT),'localhost', function(error){
        if(error) {
            sendmessage.close();
            clearInterval(interval);
            console.error('Something went wrong!');
        } else {
            console.log(`Data drone id ${toSend[0]} sent`);
        }
    });
}, 5000);

