const getGPS = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject("Geolocation not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                resolve({
                    gpsLat: pos.coords.latitude,
                    gpsLng: pos.coords.longitude,
                    gpsAccuracy: pos.coords.accuracy
                });
            },
            (err) => {
                if (err.code === err.PERMISSION_DENIED)
                    reject("Permission denied");
                else
                    reject(err.message);
            },
            { enableHighAccuracy: true, timeout: 10000 }
        );
    });
};

export { getGPS }