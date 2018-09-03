function getRandomInRange(from, to, fixed) {
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

function generateRandomCoordinates(){
    return {
        // N/S
        latitude: getRandomInRange(-90, 90, 5),
        // W/E
        longitude: getRandomInRange(-180, 180, 5)
    }
}

module.exports = {
    getRandomInRange,
    generateRandomCoordinates
};