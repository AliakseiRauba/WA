'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _Worker = require('./Worker');

var _Worker2 = _interopRequireDefault(_Worker);

var _nedbPromises = require('nedb-promises');

var _nedbPromises2 = _interopRequireDefault(_nedbPromises);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

var users = [];
var workers = [];
var ucount = 0;
var wcount = 0;
var datastore = _nedbPromises2.default.create('data/db.db');

var User1 = new _User2.default(1234, "User 1");
console.log('user ' + User1.getInfoAboutUser() + ' are created:  ' + (ucount += 1));

var User2 = new _User2.default(56755677, "User 2");
console.log('user ' + User2.getInfoAboutUser() + ' are created: ' + (ucount += 1));

var Worker1 = new _Worker2.default("Aliaksei", "Rauba", 23);
console.log('worker ' + Worker1.getInfoAboutWork() + ' are created: ' + (wcount += 1));

var Worker2 = new _Worker2.default("Mikita", "Veliasevich", 20);
console.log('worker ' + Worker2.getInfoAboutWork() + ' are created: ' + (wcount += 1));

users.push(User1);
users.push(User2);
workers.push(Worker1);
workers.push(Worker2);

datastore.insert(users);
datastore.insert(workers);

app.get('/info', function (req, res) {
    res.send('\n    <body>\n        <h2>Users:</h2>\n        <h4>\n            <div><br>' + User1.getInfoAboutUserToHtml() + '</br></div>\n            <div><br>' + User2.getInfoAboutUserToHtml() + '</br></div>\n        </h4>\n        <h2>Workers:</h2>\n        <h4>\n            <div><br>' + Worker1.getInfoAboutWorkToHtml() + '</br></div>\n            <div><br>' + Worker2.getInfoAboutWorkToHtml() + '</br></div>\n        </h4>\n    </body>\n    ');
});

app.listen(port, function () {
    console.log('Server running at: http://localhost:' + port + '/');
});
//# sourceMappingURL=index.js.map
