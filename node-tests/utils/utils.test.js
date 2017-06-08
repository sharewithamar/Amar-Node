const expect = require('expect');
const utils = require('./utils');

it('shoud add 2 numbers', () => {
    let res = utils.add(10, 20);
    // throw new Error('Sum is wrong');
    //    if(res !==30)
    //    throw new Error(`Expected 30,but got ${res}`);

    expect(res).toBe(30).toBeA('number');


});

it('shoud square a number', () => {
    let res = utils.square(10);
    // throw new Error('Sum is wrong');
    //    if(res !==100)
    //    throw new Error(`Expected 100,but got ${res}`);
    expect(res).toBe(100).toBeA('number');


});

it('should expect some values', () => {
    // expect(12).toNotBe(11);
    // expect({name:'Amar'}).toEqual({name:'Amar'});
    //expect({ name: 'amar' }).toNotEqual({ name: 'Amar' });
    //  expect([2,3,4]).toInclude(2);
    //expect([2,3,4]).toExclude(1);

/*    expect({
        name:'Amar',
        age:29,
        location: 'Banglore'
    }).toInclude({age:29});*/
    expect({
        name:'Amar',
        age:29,
        location: 'Banglore'
    }).toExclude({age:20});
});


it('should verify first and last names are set on obj',()=>{
    let user={ job: 'Senior Developer'};
    let userObj = utils.setName(user,'Amarnath Rajasekaran');
    expect(userObj).toInclude({firstName:'Amarnath',lastName:'Rajasekaran'}).toBeA('object');
});