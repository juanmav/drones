class Drone {
    constructor(drone){
        this.id = drone.id;
        this.latitude = drone.latitude;
        this.longitude = drone.longitude;
        this.lastUpdate = new Date().getTime();
        this.stationary = false;
        this.speed = 0;
        this.delta = 0;
    }

    update(drone){

        let updateTime = new Date().getTime();
        this.delta = this.getDistance(drone, this);
        this.deltaTime = updateTime - this.lastUpdate;
        // You should visually highlight the drones that have not been moving for more than 10 seconds
        // (the drone sent updates, but didn't move more that 1 meter).
        // TODO improve this.
        this.stationary = this.deltaTime >= 10000 && this.delta < 1;
        this.speed = this.delta / this.deltaTime;
        this.latitude = drone.latitude;
        this.longitude = drone.longitude;
        this.lastUpdate = updateTime;

        return this;
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