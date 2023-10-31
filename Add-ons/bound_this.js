const User = {
    name: "Aasim"
};

const Admin = {
    name: 'Admin'
}

function sayHi() {
    console.log(this.name);
}

User.f = sayHi;
Admin.f = sayHi;
User.f();
Admin.f();