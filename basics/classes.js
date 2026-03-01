class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }
}

const user = new User("Tony", "tony@gmail.com", 123);
console.log(user);
console.log(user.encryptPassword());