/*var obj ={
    name : 'Amar'
}

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);*/

// var personString = '{"name":"Amar","age":29}'
// console.log(JSON.parse(personString));

const fs = require('fs');
// you can use writeFileSync or readFileSync if you dont want to use async callbacks
let originalNote= {
    title : 'Amar',
    body : 'so far so good'
}

fs.writeFile('notes.json', JSON.stringify(originalNote), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

fs.readFile('./notes.json', (err, data) => {
  if (err) throw err;
  console.log(JSON.parse(data).title);
});