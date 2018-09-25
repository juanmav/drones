const test = require('tape');
const GroupList = require('../models/GroupList');
const Drone = require('../models/Drone');
const DroneList = require('../models/DroneList');


test('Remove test', function (t) {
    let raw = { id: '1', latitude: 79.851640, longitude: 17.94686 };
    let groupId = GroupList.getGroupList()[0];
    let drone = new Drone(raw, groupId);

    DroneList.addOrUpdateDrone(drone);

    let wraps = () => { GroupList.removeGroup(groupId) };

    t.throws(wraps);
    t.end();
});

// TODO check deletion of default group.