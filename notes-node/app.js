console.log('starting app');
const fs = require('fs');
const os = require('os');

let user = os.userInfo();

console.log(user);


fs.appendFile('message.txt', `Hello ${user.username} !`, (err) => {
    if (err) { console.log('unable to write to file'); }

    console.log('The "data to append" was appended to file!');
});

// or our use appendFileSync

fs.appendFileSync('filesync.txt', 'Amar' + user.username+ '!');
