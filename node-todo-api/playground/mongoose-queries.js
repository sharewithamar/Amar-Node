const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

let id = '593e4d9a5f378d291caded01';

Todo.find({
    _id : id 
}).then((todos)=> console.log('Todos',todos));


Todo.findOne({
    _id : id 
}).then((todo)=> console.log('Todo',todo));

Todo.findById(id).then((todo)=> console.log('Todo By ID',todo));