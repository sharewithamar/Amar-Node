let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};


asyncAdd(10, '4').then(data => {

    console.log(data);
    return asyncAdd(data, 10);
}).then(nextData => {
    console.log('nextData', nextData);

}).catch(err => {
    console.log(err);
})

/*let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey resolved');
        reject('Hey Rejected');

    });
}, 2500);


somePromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);

});*/