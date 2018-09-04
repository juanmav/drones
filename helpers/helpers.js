function getRandomInRange(from, to, fixed) {
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

function generateRandomCoordinates(minLat = -90, maxLat = 90, minLong = -180, maxLong = 180){
    return {
        // N/S
        latitude: getRandomInRange(minLat, maxLat, 5),
        // W/E
        longitude: getRandomInRange(minLong, maxLong, 5)
    }
}

module.exports = {
    getRandomInRange,
    generateRandomCoordinates
};