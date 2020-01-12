"user strict";
export default class Worker {
    constructor(id, name, surname, age) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
    };
    get id() {
        return this._id;
    };
    set id(id) {
        this._id = id;
    };
    get name() {
        return this._name;
    };
    set name(name) {
        this._name = name;
    };
    get surname() {
        return this._surname;
    };
    set surname(surname) {
        this._surname = surname;
    };
    get age() {
        return this._age;
    };
    set age(age) {
        this._age = age;
    };

    getInfoAboutWork() {
        return (
            "ID: " + this.id + "\n" +
            "Name: " + this.name + "\n" +
            "Surname: " + this.surname + "\n" +
            "Age: " + this.age + "\n" +
            "Date: " + Date.now()
        );
    };

    getInfoAboutWorkToHtml() {
        return (
            "<br>ID: " + this.id + "</br>" +
            "<br>Name: " + this.name + "</br>" +
            "<br>Surname: " + this.surname + "</br>" +
            "<br>Age: " + this.age + "</br>" +
            "<br>Date: " + Date.now() + "</br>"
        );
    };
};