function setUsername (username) {
    this.username = username;
}

function setUser (username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const user1 = new setUser("bhataasim", "aasim@fb.com", "123");
console.log(user1);