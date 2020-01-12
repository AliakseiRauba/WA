"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User(id, username) {
        _classCallCheck(this, User);

        this.id = id;
        this.username = username;
    }

    _createClass(User, [{
        key: "getInfoAboutUserToHtml",
        value: function getInfoAboutUserToHtml() {
            return "<br> ID: " + this.id + "</br>" + "<br> Username: " + this.username + "</br>";
        }
    }, {
        key: "getInfoAboutUser",
        value: function getInfoAboutUser() {
            return "ID: " + this.id + "\n" + "Username: " + this.username + "\n";
        }
    }, {
        key: "id",
        get: function get() {
            return this._id;
        },
        set: function set(id) {
            this._id = id;
        }
    }, {
        key: "username",
        get: function get() {
            return this._username;
        },
        set: function set(username) {
            this._username = username;
        }
    }]);

    return User;
}();

exports.default = User;
;
//# sourceMappingURL=User.js.map
