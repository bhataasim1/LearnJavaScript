const Users = function (userName, password) {
    this.userName = userName;
    this.password = password;

    // function display() {
    //     console.log(`username = ${this.userName}, and password = ${this.password}`);
    // }
}

Users.prototype.printMe = function () {
    console.log(`username = ${this.userName}, and password = ${this.password}`);
}

const user1 = new Users('Aasim', '123');
user1.printMe();


let myName = 'Aasim    ';
// console.log(myName.trim().length);

String.prototype.realLength = function () {
    console.log(`Length ${this.trim().length}`);
}

myName.realLength();
"Test User".realLength();

// Prototypal Inheritance

const Joker = {
    name: "Aasim",
    email: "aasim@test.com"
};

const validation = {
    userId: '1',
    anyGroup: false,
    status: {
        Male: true,
        Female: false,
        other: false
    },
    isMarried: true,
    DOB: '2000',

    printDOB: function () {
        console.log(`Your Date of Birth is: ${this.DOB}`);
    }
};

// console.log(Joker.name, Joker.email)

const Joker2 = {
    password: "123",
    __proto__: validation       // I think there we can not use Multiple Inheritance
};

console.log(Joker2.name, Joker2.password);    //Here 'name' will not be Accessible
console.log(Joker2.__proto__);
console.log(Joker2.printDOB());


const testObject = {
    username: "bhataaism",
    name: "Aasim",
    email: "aasim@aasim.com",
    password: "123456",
};

Object.prototype.Aasim = function () {
    console.log(`${this.name}`);
};

testObject.Aasim();

const myArray = ['superman', 'spiderman', 'thor'];

Array.prototype.convertString = function () {
    console.log(`Converted to String ${this}`)
}

myArray.convertString();