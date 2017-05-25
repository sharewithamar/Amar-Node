let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey resolved');
        reject('Hey Rejected');

    });
}, 2500);


somePromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);

});