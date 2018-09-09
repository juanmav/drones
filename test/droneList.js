const test = require('tape');
const DroneList = require('../models/DroneList');
const Drone = require('../models/Drone');
const { rawToJSON } = require('../services/convertData');

test('Test list', function (t) {
    const list = DroneList.getList();
    t.ok(list.length === 0);
    t.ok(Array.isArray(list));
    t.end();
});

test('Test list', function (t) {
    let string = "1,15.16305,-118.20511";
    let drone = rawToJSON(string);

    t.ok(drone.id, 'Raw Drone Data created');
    DroneList.addOrUpdateDrone(drone);
    let instanceDrone = DroneList.getDrone(drone.id);
    t.ok(instanceDrone instanceof Drone);

    t.ok(instanceDrone);
    t.ok(instanceDrone.latitude);
    t.ok(instanceDrone.longitude);

    t.end();
});