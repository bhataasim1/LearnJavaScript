class Users {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }
}

const user1 = new Users('aasim', 'aasim@fb.com', '123');
console.log(user1.email);