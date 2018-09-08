#!/usr/bin/env node
const WebSocketServer = require('websocket').server;
const http = require('http');
const fs = require('fs');
const index = fs.readFileSync(__dirname + '/../public/index.html');
const DroneList = require('../models/DroneList');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
    return true;
}

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
    } else {
        const connection = request.accept('echo-protocol', request.origin);
        console.log((new Date()) + ' Connection accepted.');

        connection.sendUTF(JSON.stringify(DroneList.getList()));

        let fn = function (drones) {
            connection.sendUTF(JSON.stringify(drones));
        };

        DroneList.subscribe(fn);

        connection.on('close', function(reasonCode, description) {
            console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
            DroneList.unSubscribe(fn);
        });
    }
});

module.exports = server;

