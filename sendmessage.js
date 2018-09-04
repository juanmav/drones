const udp = require('dgram');
const sendmessage = udp.createSocket('udp4');
const dotenv = require('dotenv');
dotenv.config();

const data = Buffer.from("1,15.16305,-118.20511");

sendmessage.send(data, parseInt(process.env.UDP_PORT),'localhost', function(error){
    if(error) {
        sendmessage.close();
    } else {
        sendmessage.close();
        console.log('Data sent!!!');
    }
});