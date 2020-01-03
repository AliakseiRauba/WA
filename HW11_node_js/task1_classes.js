class User {
    constructor(id, username) {
        this.id = id;
        this.username = username;
    };
    set Id(id) {
        this._id = id;
    };
    get Id() {
        return this._id;
    };
    set Username(username) {
        this._username = username;
    };
    get Username() {
        return this._username;
    };


    getInfoAboudUser() {
        return (
            "ID: " + this.id + "\n" +
            "Username: " + this.username
        );
    }
};


class Worker {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    };
    set Name(name) {
        this._name = name;
    };
    get Name() {
        return this._name;
    };
    set Surname(surname) {
        this._surname = surname;
    };
    get Surname() {
        return this._surname;
    };
    set Age(age) {
        this._age = age;
    };
    get Age() {
        return this._age;
    };


    getInfoAboudWork() {
        return (
            "Name: " + this.name + "\n" +
            "Surname: " + this.surname + "\n" +
            "Age: " + this.age + "\n" +
            "Date:" + Date.now()
        );
    };
}
let u = 0;
let w = 0;
let User1 = new User(65477457, "user1");
console.log("user are created: " + (u += 1));
let User2 = new User(56755677, "user2");
console.log("user are created: " + (u += 1));
let Worker1 = new Worker("Aliaksei", "Rauba", 23);
console.log("worker are created: " + (w += 1));
let Worker2 = new Worker("Mikita", "Veliasevich", 20);
console.log("worker are created: " + (w += 1));


console.log(User1.getInfoAboudUser());
console.log(User2.getInfoAboudUser());

console.log(Worker1.getInfoAboudWork());
console.log(Worker2.getInfoAboudWork());