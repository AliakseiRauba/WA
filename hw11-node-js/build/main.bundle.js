"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User(id, username) {
        _classCallCheck(this, User);

        this.id = id;
        this.username = username;
    }

    _createClass(User, [{
        key: "getInfoAboudUser",
        value: function getInfoAboudUser() {
            return "ID: " + this.id + "\n" + "Username: " + this.username;
        }
    }, {
        key: "Id",
        set: function set(id) {
            this._id = id;
        },
        get: function get() {
            return this._id;
        }
    }, {
        key: "Username",
        set: function set(username) {
            this._username = username;
        },
        get: function get() {
            return this._username;
        }
    }]);

    return User;
}();

var Worker = function () {
    function Worker(name, surname, age) {
        _classCallCheck(this, Worker);

        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    _createClass(Worker, [{
        key: "getInfoAboudWork",
        value: function getInfoAboudWork() {
            return "Name: " + this.name + "\n" + "Surname: " + this.surname + "\n" + "Age: " + this.age + "\n" + "Date:" + Date.now();
        }
    }, {
        key: "Name",
        set: function set(name) {
            this._name = name;
        },
        get: function get() {
            return this._name;
        }
    }, {
        key: "Surname",
        set: function set(surname) {
            this._surname = surname;
        },
        get: function get() {
            return this._surname;
        }
    }, {
        key: "Age",
        set: function set(age) {
            this._age = age;
        },
        get: function get() {
            return this._age;
        }
    }]);

    return Worker;
}();

var u = 0;
var w = 0;
var User1 = new User(65477457, "user1");
console.log("user are created: " + (u += 1));
var User2 = new User(56755677, "user2");
console.log("user are created: " + (u += 1));
var Worker1 = new Worker("Aliaksei", "Rauba", 23);
console.log("worker are created: " + (w += 1));
var Worker2 = new Worker("Mikita", "Veliasevich", 20);
console.log("worker are created: " + (w += 1));

console.log(User1.getInfoAboudUser());
console.log(User2.getInfoAboudUser());

console.log(Worker1.getInfoAboudWork());
console.log(Worker2.getInfoAboudWork());
