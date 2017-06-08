const utils = require('./utils');

it('shoud add 2 numbers', () => {
    let res = utils.add(10, 20);
   // throw new Error('Sum is wrong');
   if(res !==30)
   throw new Error(`Expected 30,but got ${res}`);


});

it('shoud square a number', () => {
    let res = utils.square(10);
   // throw new Error('Sum is wrong');
   if(res !==100)
   throw new Error(`Expected 100,but got ${res}`);


});