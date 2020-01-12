"use strict";
"user strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Worker = function () {
    function Worker(name, surname, age) {
        _classCallCheck(this, Worker);

        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    _createClass(Worker, [{
        key: "getInfoAboutWork",
        value: function getInfoAboutWork() {
            return "Name: " + this.name + "\n" + "Surname: " + this.surname + "\n" + "Age: " + this.age + "\n" + "Date: " + Date.now();
        }
    }, {
        key: "getInfoAboutWorkToHtml",
        value: function getInfoAboutWorkToHtml() {
            return "<br>Name: " + this.name + "</br>" + "<br>Surname: " + this.surname + "</br>" + "<br>Age: " + this.age + "</br>" + "<br>Date: " + Date.now() + "</br>";
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        },
        set: function set(name) {
            this._name = name;
        }
    }, {
        key: "surname",
        get: function get() {
            return this._surname;
        },
        set: function set(surname) {
            this._surname = surname;
        }
    }, {
        key: "age",
        get: function get() {
            return this._age;
        },
        set: function set(age) {
            this._age = age;
        }
    }]);

    return Worker;
}();

exports.default = Worker;
;
//# sourceMappingURL=Worker.js.map
