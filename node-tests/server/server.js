const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send('Hola');
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo V1.0'
    });
})

app.get('/users', (req, res) => {
    // res.send('Hola');
    res.send([{
        name: 'Max',
        course: 'Angular'
    }, {
        name: 'Andrew',
        course: 'Node'
    }]);
})

app.listen(3000, () => {
    console.log('Server Up');
})

module.exports.app = app;