function onCreate(ev) {
    ev.preventDefault();
    var data = JSON.stringify({
        //"id": String(document.getElementById("cidfield").value),
        "number": String(document.getElementById("cnumberfield").value),
        "typeofcontribution": String(document.getElementById("ctypefield").value),
        "pin": String(document.getElementById("cpinfield").value),
        "balance": String(document.getElementById("cbalancefield").value),
        "dateofcreation": String(document.getElementById("cdatefield").value),
        "user": String(document.getElementById("cuserfield").value)
    });
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            document.getElementById("createForm").dispatchEvent(new Event('create'));
            console.log("Create is complete." + this.responseText);
        }
    });
    xhr.open("POST", "http://localhost:2403/account");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onRead() {
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            result = JSON.parse(this.response);
            var resultTBody = document.createElement('tbody');
            result.map(function(Acc) {
                resultTBody.appendChild(parseAccountsToTableRow(Acc));
            });
            var table = document.getElementById('tablebody').parentElement;
            table.replaceChild(resultTBody, document.getElementById('tablebody'));
            resultTBody.id = 'tablebody';
            console.log('Read is complete.')
        }
    });
    xhr.open("GET", "http://localhost:2403/account");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function onUpdate(ev) {
    ev.preventDefault();
    var data = JSON.stringify({
        //"id": String(document.getElementById("cidfield").value),
        "number": String(document.getElementById("unumberfield").value),
        "typeofcontribution": String(document.getElementById("utypefield").value),
        "pin": String(document.getElementById("upinfield").value),
        "balance": String(document.getElementById("ubalancefield").value),
        "dateofcreation": String(document.getElementById("udatefield").value),
        "user": String(document.getElementById("uuserfield").value)
    });
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log("Update is complete." + this.responseText);
        }
    });
    xhr.open("PUT", "http://localhost:2403/account/" + document.getElementById("uidfield").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);

}


function onDelete(ev) {
    ev.preventDefault();
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log("Delete is complete." + this.responseText);
        }
    });

    xhr.open("DELETE", "http://localhost:2403/account/" + document.getElementById("didfield").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}


function parseAccountsToTableRow(Accounts) {
    var row = document.createElement('tr');

    id = document.createElement('th');
    id.innerText = Accounts['id'];
    row.appendChild(id);

    number = document.createElement('td');
    number.innerText = Accounts['number'];
    row.appendChild(number);

    typeofcontribution = document.createElement('td');
    typeofcontribution.innerText = Accounts['typeofcontribution'];
    row.appendChild(typeofcontribution);

    pin = document.createElement('td');
    pin.innerText = Accounts['pin'];
    row.appendChild(pin);

    balance = document.createElement('td');
    balance.innerText = Accounts['balance'];
    row.appendChild(balance);

    dateofcreation = document.createElement('td');
    dateofcreation.innerText = Accounts['dateofcreation'];
    row.appendChild(dateofcreation);

    user = document.createElement('td');
    user.innerText = Accounts['user'];
    row.appendChild(user);

    console.log("TableBody is created.");
    return row;
}


(function() {

    document.getElementById('cbutton').addEventListener(
        'click', onCreate
    );
    document.getElementById('rbutton').addEventListener(
        'click', onRead
    );
    document.getElementById('ubutton').addEventListener(
        'click', onUpdate
    );
    document.getElementById('dbutton').addEventListener(
        'click', onDelete
    );
    console.log('Handlers is set');
})()