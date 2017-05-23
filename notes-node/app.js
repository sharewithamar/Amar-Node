const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
let command = process.argv[2];

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNote(note);
    }
    else {
        console.log('note already exists');

    }

}
else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}
else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    }
    else {
        console.log(`note not found`);
    }
}
else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note removed' : 'Note does not exist';
    console.log(message);
}
else {
    console.log('command not recognized');

}
