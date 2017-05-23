const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

let title = {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
};
let body = {
    describe: 'body of Note',
    demand: true,
    alias: 'b'
}


const argv = yargs.
    command('add', 'Add a new note', {
        title,
        body
    })
    .command('list', 'list all notes')
    .command('read', 'read a note', {
        title
    })
    .command('remove', 'remove a note', {
        title
    })
    .help()
    .argv;
//let command = process.argv[2];
let command = argv._[0];
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
