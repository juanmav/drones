const dotenv = require('dotenv');
dotenv.config();
const udpServer = require('./services/udpserver');


udpServer.bind(parseInt(process.env.UDP_PORT));