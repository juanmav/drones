/**
 * Suppose that the info is sent in this format.
 * id,latitude,longitude
 *
 * In the future it is posible to change de implementation
 * maybe the data could be sent in HEX or another format.
 *
 * @param {String} string the format is id,latitude,longitude
 *
 * */
function rawToJSON(string){
    let values = string.split(',');

    // Basic Validation of integrity Data.
    if (values.length !== 3){
        throw new Error('Missing Parameters');
    } else {
        let [ id, latitude, longitude ] = values;

        return {
            id, latitude: parseFloat(latitude), longitude: parseFloat(longitude)
        }
    }
}

module.exports =  { rawToJSON };