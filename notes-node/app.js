console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
let command = process.argv[2];
console.log('process',process.argv);
console.log('yargs',argv);
console.log('tile',argv.title);
console.log('body',argv.body);


if (command === 'add') {
    console.log('add note');
}
else if (command === 'list') {
    console.log('list all notes');
}
else if (command === 'read') {
    console.log('read note');
}
else if (command === 'remove') {
    console.log('delete note');
}
else {
    console.log('command not recognized');

}
