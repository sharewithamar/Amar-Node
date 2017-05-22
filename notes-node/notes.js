console.log('starting notes.js');

//console.log(module);

var addNote =(title,body) => {
console.log('Adding Note',title,body);
}

var getAll=()=>{
    console.log("get all");
}

var getNote =(title)=>{
    console.log("get this title",title);
}

var removeNote = (title)=>{
    console.log("remove this title",title);
}

module.exports={
    addNote, // if both key and value have same name use ES6 syntax = addNote: addNote
    getAll,
    getNote,
    removeNote
}

