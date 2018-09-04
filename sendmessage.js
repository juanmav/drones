const udp = require('dgram');
const sendmessage = udp.createSocket('udp4');
const dotenv = require('dotenv');
dotenv.config();

let flipflop = false;

let interval = setInterval(function () {

    const drone1 = "1,15.16305,-118.20511";
    const drone2 = "2,15.16305,-118.20511";

    const toSend = flipflop ? drone1 : drone2;
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

