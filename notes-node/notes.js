console.log('starting notes.js');

//console.log(module);
const fs = require('fs');

var addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (error) {

    }

    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }


}

var getAll = () => {
    console.log("get all");
}

var getNote = (title) => {
    console.log("get this title", title);
}

var removeNote = (title) => {
    console.log("remove this title", title);
}

module.exports = {
    addNote, // if both key and value have same name use ES6 syntax = addNote: addNote
    getAll,
    getNote,
    removeNote
}