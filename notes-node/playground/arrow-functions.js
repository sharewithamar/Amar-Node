let square = x => x * x;
console.log(square(9));

var user = {
    name: 'Amar',
    sayHi: () => {
        console.log(arguments);

        console.log(`Hi i'm ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi i'm ${this.name}`);
    },
    sayHiFunc: function () {
        console.log(`Hi i'm ${this.name}`);

    }
};
user.sayHi() // will return undefined cant access this.name
//user.sayHiAlt(1, 2, 3);
user.sayHiFunc();