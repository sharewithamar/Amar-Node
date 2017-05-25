
const request = require('request');

let geocodeAddress = (address) => {
    let userAddress = encodeURIComponent(address);


    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${userAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                // callback('Unable to connect to google servers');
                reject('Unable to connect to google servers');
            }
            else if (body.status === 'ZERO_RESULTS') {

                //  callback('Unable to find that address');
                reject('Unable to find that address');

            }
            else if (body.status == 'OK') {

                resolve({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                });

                /*    callback(undefined, {
                        address: body.results[0].formatted_address,
                        lat: body.results[0].geometry.location.lat,
                        lng: body.results[0].geometry.location.lng
                    });*/

            }


        });
    });

};

geocodeAddress('perumal kovil karaikudi, 630001').then(data => {
    console.log('data', data);
}, error => {
    console.log('error', error);
})