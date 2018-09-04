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

/**
 * addOrUpdateDrone recieves a rawDrone and manages it, if the drone
 * already exists updates the data of it otherwise creates a new one.
 *
 * @param rawDrone object with minimal data id, latitude, longitude
 * */
function addOrUpdateDrone(rawDrone) {
    const inlist = getDrone(rawDrone.id);
    let instance;
    if(inlist){
        instance = inlist.update(rawDrone);
    } else {
        instance = new Drone(rawDrone);
        drones = [...drones, instance];
    }
    return instance;
}

/**
 * getDrone get drone by id
 * @param id identifier of drone
 * @return {Drone} a instance of a drone.
 * */
function getDrone(id) {
    return drones.find( d => d.id === id);
}

function getList(){
    return drones;
}
module.exports = {
    addOrUpdateDrone,
    getDrone,
    getList,
};
