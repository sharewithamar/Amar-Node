let getUser = (id, callback) => {
    let user = {
        id,
        name: 'Amar'
    }
    setTimeout(() => {
        callback(user);
    }, 3000);


};

getUser(7, (userObj) => {
    console.log(userObj);
});