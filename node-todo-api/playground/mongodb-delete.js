const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err)
        return console.log("Unable to connect to MongoDB server");
    console.log("connected to MongoDB server");

    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then(result=>console.log(result));

   // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then(result=>console.log(result));

 //  db.collection('Todos').findOneAndDelete({completed:false}).then(result=>console.log(result));

     db.collection('Users').deleteMany({name:'Amar'}).then(result=>console.log(result));

   db.collection('Users').findOneAndDelete({_id:new ObjectID("593abcaa7a29142df3f8f6bb")}).then(result=>console.log(result));


    //db.close()
});