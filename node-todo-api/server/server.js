let express = require('express');
let bodyParser = require('body-parser');

let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { user } = require('./models/user');


let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //  console.log(req.body);
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then(doc => {
        res.send(doc);
    }, err => {
        res.status(400).send(err);
    })

});

app.listen('3000', () => {
    console.log('Started on port 3000');
})


module.exports = { app };