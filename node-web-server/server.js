const express= require('express');

var app =express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
 // res.send('<h2>Hello Amar</h2>Hello World!')
 res.send({
     name: 'Amar',
     likings:[
        'Coding',
        'Photography',
        'Movies',
        'History',
        'Twitter'
     ]
 });
});

app.get('/about',(req,res)=>{
    res.send('About Page1');
});

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage: `Avv that's bad url..`
    });
});
app.listen(3000,()=>{
    console.log('Server is up');
});