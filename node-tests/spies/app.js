let db= require('./db');

module.exports.handleSignUp = (email,password) => {

//check if email already exisits

//save to db
db.saveUser({ email, password});
//send welcome mail
    
};
