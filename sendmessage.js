const udp = require('dgram');
const buffer = require('buffer');
const sendmessage = udp.createSocket('udp4');
const dotenv = require('dotenv');
dotenv.config();

const data = Buffer.from('hello world');

sendmessage.send(data, parseInt(process.env.UDP_PORT),'localhost', function(error){
    if(error) {
        sendmessage.close();
    } else {
        sendmessage.close();
        console.log('Data sent!!!');
    }
});