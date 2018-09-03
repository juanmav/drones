class Drone {
    constructor(drone){
        this.id = drone.id;
        this.latitude = drone.latitude;
        this.longitude = drone.longitude;
        this.lastUpdate = new Date().getTime();
    }

    update(drone){
        // TODO calculate change
        this.id = drone.id;
        this.latitude = drone.latitude;
        this.longitude = drone.longitude;
        this.lastUpdate = new Date().getTime();
    }


    // https://stackoverflow.com/a/27943/1207842
    getDistance({ latitude: lat1, longitude: lon1},{ latitude: lat2, longitude: lon2}) {
        const R = 6371000; // Radius of the earth in meters
        const dLat = this.deg2rad(lat2-lat1);  // deg2rad below
        const dLon = this.deg2rad(lon2-lon1);
        const a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        // Distance in meters
        return R * c;
    }

    deg2rad(deg) {
        return deg * (Math.PI/180)
    }

}

module.exports= Drone;