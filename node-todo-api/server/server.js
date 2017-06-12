const mongoose = require('mongoose');

mongoose.promise = global.promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todos',
    {
        text: {
            type: String,
            required: true,
            minlength: 1,
            trim: true
        },
        completed: {
            type: Boolean,
            default: false
        },
        completedAt: {
            type: Number,
            default: null

        }
    }
);

/*let newTodo = new Todo({
    text: ' Good Morning  '
});
*/
/*let newTodo= new Todo({
    text: 'Eat Lunch',
    completed: false,
    completedAt: 123
    
});*/


//newTodo.save().then(doc => console.log(doc), err => console.log(err));

let user = mongoose.model('users',{
  email:{
      type:String,
      minlength:1,
      trim:true,
      required:true

  }
});

let newUser = new user({
    email: 'Amar '
});

newUser.save().then(doc => console.log(doc), err => console.log(err));