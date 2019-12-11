var numberOfAccs;
var accounts = [];


//main class
function Account(id, number) {
    this.id = id;
    this.number = number;

    this.setid = function(newId) {
        this.id = newId;
    };
    this.getId = function() {
        return this.id;
    };

    this.setNumber = function(newNumber) {
        this.number = newNumber;
    };
    this.getNumber = function() {
        return this.number;
    };
}

//child classes
function BalanceInfo(balance, id, number) {
    Account.call(this, id, number);
    this.balance = balance;
    this.getBalance = function() {
        return balance;
    };
    this.setBalance = function(newBalance) {
        this.balance = newBalance;
    };
}
BalanceInfo.prototype = Object.create(Account.prototype);

function MoreInfo(type, username, id, number) {
    Account.call(this, id, number);
    this.username = username;
    this.type = type;
    this.getType = function() {
        return this.type;
    };
    this.setType = function(newType) {
        this.type = newType;
    };

    this.getUsername = function() {
        return this.username;
    };
    this.setUsername = function(newUsername) {
        this.username = newUsername;
    };
}
MoreInfo.prototype = Object.create(Account.prototype);



//write info
Account.prototype.getInfoAboutAccount = function() {
    return (
        "ID: " + this.getId() + "\n" +
        "Number: " + this.getNumber()
    );
}
BalanceInfo.prototype.getInfoAboutBalance = function() {
    return (
        Account.prototype.getInfoAboutAccount.call(this) + "\n" +
        "Balance: " + this.getBalance()
    );
};
MoreInfo.prototype.getMoreInfo = function() {
    return (
        Account.prototype.getInfoAboutAccount.call(this) + "\n" +
        "Type: " + this.getType() + "\n" +
        "Username: " + this.getUsername()
    );
};
var account = new Account("3h4h45", 23);
console.log(account.getInfoAboutAccount());
accounts.push(account);

var accountBalance = new BalanceInfo(500, "3h4h45", 23);
console.log(accountBalance.getInfoAboutBalance());
accounts.push(accountBalance);

var accountMoreInfo = new MoreInfo("simple", "aliakseirauba", "sdf7sdf788", 1);
console.log(accountMoreInfo.getMoreInfo());
accounts.push(accountMoreInfo);

accounts.push(account);
console.log(accounts)