Math.PI = 5;

const prop = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(prop);

const Users = {
    name: "Aasim",
    email: "aasim@fb.com",
    getDOB: function () {
        DOB: "12-03-2000"
    }
};
// console.log(Users)
const usersPropsBefore = Object.getOwnPropertyDescriptor(Users, 'name');
// console.log(usersPropsBefore);

// For Single 

// Object.defineProperty(Users, 'name', {
//     writable: false,
//     enumerable: false,
//     configurable: true,
// })

//For Multiple

Object.defineProperties(Users, {
    name:{
        writable: false,
        enumerable: false
    },
    email: {
        writable: false,
        enumerable: false,
    },
    getDOB: {
        enumerable: false
    }
});

const usersPropsAfter = Object.getOwnPropertyDescriptor(Users, 'name');
// console.log(usersPropsAfter);

Users.name = "Bhat";
// console.log(Users);

for (const [key, value] of Object.entries(Users)) {
    console.log(value);
}