
const request = require('request');

let geocodeAddress = (useraddress, callback) => {
    let userAddress = encodeURIComponent(useraddress);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${userAddress}`,
        json: true
    }, (error, response, body) => {
        // console.log(JSON.stringify(body,undefined,2));
        if (error) {
            //console.log('Unable to connect to google servers');
        callback('Unable to connect to google servers');
        }
        else if (body.status === 'ZERO_RESULTS') {
          //  console.log('Unable to find that address');
        callback('Unable to find that address');

        }
        else if (body.status == 'OK') {
        callback(undefined,{
            address:body.results[0].formatted_address,
            lat:body.results[0].geometry.location.lat,
            lng:body.results[0].geometry.location.lng
        });

            // console.log(`address: ${body.results[0].formatted_address}`);
            // console.log(`latitude: ${body.results[0].geometry.location.lat}`);
            // console.log(`longitude: ${body.results[0].geometry.location.lng}`);
        }


    });

}

module.exports.geocodeAddress = geocodeAddress;