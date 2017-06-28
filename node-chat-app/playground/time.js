// let currentMonth = new Date().getMonth();
// console.log('currentMonth', currentMonth);


var moment = require('moment');

var date = moment();
//date.add(1, 'Y').subtract(12, 'months');
//console.log(date.format('MMM Do YYYY'));

//console.log(date.calendar());
//console.log(date.format('h:ss a'));

console.log(new Date().getTime());
console.log(moment().valueOf());
