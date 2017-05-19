console.log('starting app.js');
const fs = require('fs');
const os = require('os');
const notes=require('./notes.js');
let res= notes.add(10,5);
console.log(res);

/*let user = os.userInfo();

console.log(user);


fs.appendFile('message.txt', `Hello ${user.username} ! your are ${notes.age}`, (err) => {
    if (err) { console.log('unable to write to file'); }

    console.log('The "data to append" was appended to file!');
});*/

// or our use appendFileSync

//fs.appendFileSync('filesync.txt', 'Amar' + user.username+ '!');
