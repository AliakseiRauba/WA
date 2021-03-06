"use strict";
export default class User {
    constructor(id, username) {
        this.id = id;
        this.username = username;
    }
    get id() {
        return this._id;
    };
    set id(id) {
        this._id = id;
    };

    get username() {
        return this._username;
    };
    set username(username) {
        this._username = username;
    };

    getInfoAboutUserToHtml() {
        return (
            "<br> ID: " + this.id + "</br>" +
            "<br> Username: " + this.username + "</br>"
        );
    };

    getInfoAboutUser() {
        return (
            "ID: " + this.id + "\n" +
            "Username: " + this.username + "\n"
        );
    };
};