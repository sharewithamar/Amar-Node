const request = require('request');
const yargs = require('yargs');

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
    .alias('help','h')
    .argv;

    //console.log(argv);

    let userAddress = encodeURIComponent(argv.a);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${userAddress}`,
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(body,undefined,2));
    console.log(`address: ${body.results[0].formatted_address}`);
    console.log(`latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`longitude: ${body.results[0].geometry.location.lng}`);

});