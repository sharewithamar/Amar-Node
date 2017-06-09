//const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err)
        return console.log("Unable to connect to MongoDB server");
    console.log("connected to MongoDB server");

    /* db.collection('Todos').find().toArray().then(docs =>{
            console.log(JSON.stringify(docs,undefined,2));
        },err=> console.log("unable to fetch Todos",err));
    
        db.collection('Todos').find({completed:false}).toArray().then(docs =>{
            console.log(JSON.stringify(docs,undefined,2));
        },err=> console.log("unable to fetch Todos",err));*/

  /*  db.collection('Todos').find({ _id: new ObjectID('593aa57fbcc55f1a48a8a191') }).toArray().then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => console.log("unable to fetch Todos", err));*/

 /*   db.collection('Todos').find().count().then(count => {
        console.log(`Count:${count}`);
    }, err => console.log("unable to fetch Count", err));*/
   db.collection('Users').find({name:'Amar'}).count().then(count => {
        console.log(`Count:${count}`);
    }, err => console.log("unable to fetch Count", err));
    //db.close()
});