/**
 * Suppose that the info is sent in this format.
 *
 * id,latitude,longitude
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
            id, latitude, longitude
        }
    }
}

module.exports =  { rawToJSON };