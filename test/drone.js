const test = require('tape');
const Drone = require('../models/Drone');

test.skip('Drone movement', function (t) {
   let raw = { id: '1', latitude: 79.85164, longitude: 17.94686 };
   let drone = new Drone(raw);
   t.ok(drone.delta === 0);
   // modify data location after a while.
    setTimeout(function () {
        raw = { id: '1', latitude: 80.85164, longitude: 17.94686 };
        drone.update(raw);
        t.ok(drone.delta);
        t.ok(drone.deltaTime);
        t.false(drone.stationary);
        t.end();
    }, 1000)
});

test.skip('Severals updates in close time', function (t) {
    let raw = { id: '1', latitude: 79.851640, longitude: 17.94686 };
    let drone = new Drone(raw);

    drone.update(raw);
    raw.latitude = 80.851640;
    drone.update(raw);

    t.ok(drone.history.length === 3);
    t.ok(drone.tenSecondsDelta > 1);
    t.end();

});

// TODO improve time test Inject Dates.
test('Drone Movement less than 1 meter in 10 seconds "stationary"', function (t) {
    let raw = { id: '1', latitude: 79.851640, longitude: 17.94686 };
    let drone = new Drone(raw);
    t.ok(drone.delta === 0);
    // modify data location after a while.
    setTimeout(function () {
        raw = { id: '1', latitude: 79.851645, longitude: 17.94686 };
        drone.update(raw);
        t.ok(drone.tenSecondsDelta < 1);
        t.ok(drone.stationary);
    }, 1000);

    setTimeout(function () {
        raw = { id: '1', latitude: 79.851646, longitude: 17.94686 };
        drone.update(raw);
        t.ok(drone.tenSecondsDelta < 1);
        t.ok(drone.stationary);
    }, 5000);

    setTimeout(function () {
        raw = { id: '1', latitude: 89.85165, longitude: 17.94686 };
        drone.update(raw);
        t.ok(drone.tenSecondsDelta > 1);
        t.false(drone.stationary);
        t.end();
    }, 9000);

});

