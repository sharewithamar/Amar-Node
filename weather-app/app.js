const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=%20Indiranagar%20Banglore',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body,undefined,2));

});