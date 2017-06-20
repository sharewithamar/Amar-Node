
const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { user } = require('./../server/models/user');

//todo.remove sends only number of delted
// Todo.remove({}).then(result=>console.log("removed all todos",result));


//Todo.findOneAndRemove() removes and sends deleted todo

Todo.findOneAndRemove({_id:'59400632e6ab9838ec65ff8b'}).then(todo=>console.log(todo));

// Todo.findByIdAndRemove('59400631e6ab9838ec65ff8a').then(todo=>console.log(todo));