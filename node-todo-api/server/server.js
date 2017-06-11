const mongoose=require('mongoose');

mongoose.promise= global.promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todos',
    {
        text:{
            type :String
        },
        completed:{
            type:Boolean
        },
        completedAt:{
            type: Number
        }
    }
);

/*let newTodo= new Todo({
    text: 'Cook Dinner'
});*/

let newTodo= new Todo({
    text: 'Eat Lunch',
    completed: false,
    completedAt: 123
    
});


newTodo.save().then(doc => console.log(doc),err=> console.log(err));