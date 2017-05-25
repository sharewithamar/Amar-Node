
/*const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather',
            string: true
        }

    })
    .help()
    .alias('help', 'h')
    .argv;


geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    }
    else {
        console.log(JSON.stringify(results, undefined, 2));
    }

});*/



//bf92275b5c0c01a953f110c98f2753fd

const request = require('request');
request({
    url: `https://api.darksky.net/forecast/bf92275b5c0c01a953f110c98f2753fd/10.0612643,78.76772179999999`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(`tempearture is:${body.currently.temperature}`);
    }

    else {
        console.log('Unable to fetch weather');
    }


});