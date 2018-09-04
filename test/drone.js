const test = require('tape');
const Drone = require('../models/Drone');

test('Drone movement', function (t) {
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

// TODO improve time test Inject Dates.
test('Drone Movement less than 1 meter in 10 seconds "stationary"', function (t) {
    let raw = { id: '1', latitude: 79.851640, longitude: 17.94686 };
    let drone = new Drone(raw);
    t.ok(drone.delta === 0);
    // modify data location after a while.
    setTimeout(function () {
        raw = { id: '1', latitude: 79.851645, longitude: 17.94686 };
        drone.update(raw);
        t.ok(drone.delta < 1);
        t.ok(drone.stationary);
        t.end();
    }, 10000)

});