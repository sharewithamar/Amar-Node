const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('home.hbs', {
        title: 'Amar Home hbs',
        year: new Date().getFullYear(),
        welcome:`welcome Amar`
    });

    // res.send('<h2>Hello Amar</h2>Hello World!')
    /* res.send({
         name: 'Amar',
         likings:[
            'Coding',
            'Photography',
            'Movies',
            'History',
            'Twitter'
         ]
     });*/
});

app.get('/about', (req, res) => {
    //  res.send('About Page1');
    res.render('about.hbs', {
        title: 'Amar about hbs',
        year: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: `Avv that's bad url..`
    });
});
app.listen(3000, () => {
    console.log('Server is up');
});