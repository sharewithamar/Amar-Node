console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

let command = process.argv[2];
//console.log(process.argv);

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
