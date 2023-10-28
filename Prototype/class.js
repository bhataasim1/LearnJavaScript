class Demo {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    };

    // displayUser() {
    //     return this.username;
    // }
}

Demo.prototype.displayUser = function() {
    return this.username;
}


const user = new Demo('Aasim', 'aasim@gmail.com')
console.log(user.displayUser())
console.log(user.prototype)