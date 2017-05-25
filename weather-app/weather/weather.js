const request = require('request');

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/bf92275b5c0c01a953f110c98f2753fd/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            //  console.log(`tempearture is:${body.currently.temperature}`);
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature

            });
        }

        else {
            //  console.log('Unable to fetch weather');
            callback('Unable to fetch weather');
        }


    });
}

module.exports.getWeather = getWeather;