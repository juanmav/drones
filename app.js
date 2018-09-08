const dotenv = require('dotenv');
dotenv.config();
const udpServer = require('./services/udpserver');
const htmlServer = require('./services/htmlserver');

udpServer.bind(parseInt(process.env.UDP_PORT));

htmlServer.listen(parseInt(process.env.HTTP_PORT), function() {
    console.log((new Date()) + ` Server is listening on port ${process.env.HTTP_PORT}`);
});