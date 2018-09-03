/**
 * A simple 'crud' service to recive drones data with their location.
 * */

/**
 *  drone = {
 *      id: 'some indentifier',
 *      latitue: 30.2020,
 *      longitude: 50.30303
 *  }
 * */
const Drone = require('./Drone');

let drones = [];

function addOrUpdateDrone(drone) {
    const inlist = getDrone(drone.id);
    if(inlist){
        inlist.update(drone);
    } else {
        let newDrone = new Drone(drone);
        drones = [...drones, newDrone];
    }
}

function getDrone(id) {
    return drones.find( d => d.id === drone.id);
}

function getList(){
    return drones;
}
module.exports = {
    addOrUpdateDrone,
    getDrone,
    getList,
};
