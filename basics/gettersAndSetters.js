class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    get username() {
        return this._username.toUpperCase();
    }
    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password = value;
    }
}

const user = new User("Steve", "qwe");
console.log(user.password);
console.log(user.username);