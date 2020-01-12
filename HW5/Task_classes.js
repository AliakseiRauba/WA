let numberOfAccs;
let accounts = [];


//main class
class Account {
    constructor(id, number) {
        this.id = id;
        this.number = number;
    };
    set id(id) {
        this._id = id;
    };
    get id() {
        return this._id;
    };
    set number(number) {
        this._number = number;
    };
    get number() {
        return this._number;
    };

    //write info
    getInfoAboutAccount() {
        return (
            "ID: " + this.id + "\n" +
            "Number: " + this.number
        );
    };
};

//child classes
class BalanceInfo extends Account {
    constructor(balance, id, number) {
        super(id, number);
        this.balance = balance;
    };
    get Balance() {
        return this._balance;
    };
    set Balance(balance) {
        this._balance = balance;
    };

    getInfoAboutBalance() {
        return (
            super.getInfoAboutAccount() + "\n" +
            "Balance: " + this.balance
        );
    };
};

class MoreInfo extends Account {
    constructor(type, username, id, number) {
        super(id, number);
        this.username = username;
        this.type = type;
    };
    get Type() {
        return this._type;
    };
    set Type(type) {
        this._type = type;
    };
    get Username() {
        return this._username;
    };
    set Username(username) {
        this._username = username;
    };

    getMoreInfo() {
        return (
            super.getInfoAboutAccount() + "\n" +
            "Type: " + this.type + "\n" +
            "Username: " + this.username
        );
    };
};



let account1 = new Account("3h4h45", 23);
console.log(account1.getInfoAboutAccount());
let account2 = new Account("4564ert5", 11);
console.log(account2.getInfoAboutAccount());
let accountBalance = new BalanceInfo(500, "3h4h45", 23);
console.log(accountBalance.getInfoAboutBalance());
let accountMoreInfo = new MoreInfo("simple", "aliakseirauba", "sdf7sdf788", 1);
console.log(accountMoreInfo.getMoreInfo());

accounts.push(account1);
accounts.push(account2);
accounts.push(accountBalance);
accounts.push(accountMoreInfo);


console.log(accounts)