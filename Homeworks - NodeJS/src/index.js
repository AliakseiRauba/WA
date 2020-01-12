import express from 'express';
import User from './User';
import Worker from './Worker';
import Datastore from 'nedb-promises';

const app = express();
const port = 3000;

let users = [];
let workers = [];
let ucount = 0;
let wcount = 0;
let datastore = Datastore.create('data/db.db');

let User1 = new User(1234, "User 1")
console.log(`user ${User1.getInfoAboutUser()} are created:  ` + (ucount += 1));

let User2 = new User(56755677, "User 2");
console.log(`user ${User2.getInfoAboutUser()} are created: ` + (ucount += 1));

let Worker1 = new Worker("Aliaksei", "Rauba", 23);
console.log(`worker ${Worker1.getInfoAboutWork()} are created: ` + (wcount += 1));

let Worker2 = new Worker("Mikita", "Veliasevich", 20);
console.log(`worker ${Worker2.getInfoAboutWork()} are created: ` + (wcount += 1));

users.push(User1);
users.push(User2);
workers.push(Worker1);
workers.push(Worker2);

datastore.insert(users);
datastore.insert(workers);

app.get('/info', (req, res) => {
    res.send(`
    <body>
        <h2>Users:</h2>
        <h4>
            <div><br>${User1.getInfoAboutUserToHtml()}</br></div>
            <div><br>${User2.getInfoAboutUserToHtml()}</br></div>
        </h4>
        <h2>Workers:</h2>
        <h4>
            <div><br>${Worker1.getInfoAboutWorkToHtml()}</br></div>
            <div><br>${Worker2.getInfoAboutWorkToHtml()}</br></div>
        </h4>
    </body>
    `);
});

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}/`);
});