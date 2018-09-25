const DroneList = require('./DroneList');

let groups = ['NO GROUP ID'];

function addGroup(groupId) {
    let exists = groups.find( g => g === groupId);
    if (!exists){
        groups = [...groups, groups];
    }
}

function getGroupList(){
    return groups;
}

function removeGroup(groupId){
    let exists = DroneList.getList().find( d => d.groupId === groupId);

    if (exists){
        throw new Error(`You cant delete this group: ${groupId}`);
    } else {
        let index = groups.indexOf(groupId);
        groups = groups.splice(index,1);
    }
}

module.exports = {
    addGroup,
    getGroupList,
    removeGroup
};