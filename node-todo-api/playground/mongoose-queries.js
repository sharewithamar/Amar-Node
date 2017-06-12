
const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { user } = require('./../server/models/user');

/*let id = '593e4d9a5f378d291caded01';

if(!ObjectID.isValid(id))
{
    console.log('ID not valid');
}
*/

/*Todo.find({
    _id: id
}).then((todos) => console.log('Todos', todos));


Todo.findOne({
    _id: id
}).then((todo) => console.log('Todo', todo));*/

/*Todo.findById(id).then((todo) => {

    if (!todo)
        return console.log("Id not found");

    console.log('Todo By ID', todo)

}).catch(e=>console.log(e));*/

let id = '593e1965b427bb26348a7cb9';

user.findById(id).then(user => {
    if(!user)
    return console.log('user not found');
    console.log(JSON.stringify(user,undefined,2));

}).catch(e=>console.log(e));


