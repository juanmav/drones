const test = require('tape');
const Drone = require('../models/Drone');
const { generateRandomCoordinates } = require('./helpers.js');
const { rawToJSON } = require('../services/convertData');


test.skip('Generate Random coordinates TEST', function (t) {
    let coordinates = generateRandomCoordinates();
    console.log(coordinates);
    t.ok(coordinates);
    t.false(isNaN(coordinates.latitude));
    t.false(isNaN(coordinates.longitude));
    t.ok(coordinates.latitude >= -90 && coordinates.latitude <= 90);
    t.ok(coordinates.longitude >= -180 && coordinates.latitude <= 180);
    t.end();
});

test.skip('Test convert "Raw Data" to "Raw JSON data"', function (t) {
    let string = "1,15.16305,-118.20511";

    try {
        let json = rawToJSON(string);
        console.log(json);
        t.ok(json);
        t.ok(json.id);
        t.false(isNaN(json.latitude));
        t.false(isNaN(json.longitude));
    } catch (e) {
        console.log(e);
        t.fail()
    } finally {
        t.end();
    }
});

test.skip('Test convert "Raw Data" to "Raw JSON data" with wrong data', function (t) {
    let string = "1-15.1630509-118.20511";
    try {
        let json = rawToJSON(string);
        t.fail();
    } catch (e) {
        console.log(e.message);
        t.ok(e)
    } finally {
        t.end();
    }
});


test('Test creating a Drone from "Raw JSON" data', function (t) {
    let inputData = "1,15.16305,-118.20511";
    try {
        let json = rawToJSON(inputData);
        let drone = new Drone(json);
        t.ok(drone.lastUpdate);
    } catch (e) {
        console.log(e.message);
        t.fail(e)
    } finally {
        t.end();
    }
});

