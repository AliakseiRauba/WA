function onCreate(ev) {
    ev.preventDefault();
    let data = JSON.stringify({
        //"id": String(document.getElementById("cidfield").value),
        number: String(document.getElementById("cnumberfield").value),
        typeofcontribution: String(document.getElementById("ctypefield").value),
        pin: String(document.getElementById("cpinfield").value),
        balance: String(document.getElementById("cbalancefield").value),
        dateofcreation: String(document.getElementById("cdatefield").value),
        user: String(document.getElementById("cuserfield").value)
    });

    fetch("http://localhost:2403/account/", {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(response => alert(`Object: 
                                ${response.number}, 
                                ${response.typeofcontribution},
                                ${response.balance},
                                ${response.dateofcreation},
                                ${response.user} - are created.`))
        /*.then(response => console.log(`Object: 
                                ${response.number}, 
                                ${response.typeofcontribution},
                                ${response.balance},
                                ${response.dateofcreation},
                                ${response.user} - are created.`))*/
        .catch(error => console.error("Error. Object are not created.", error));
}

function onRead() {
    fetch("http://localhost:2403/account/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(resultInfo => {
            let resultTBody = document.createElement("tbody");
            resultInfo.map(function(accountInfo) {
                resultTBody.appendChild(parseAccountToTableRow(accountInfo));
            });

            let table = document.getElementById("tablebody").parentElement;
            table.replaceChild(resultTBody, document.getElementById("tablebody"));
            resultTBody.id = "tablebody";
            console.log(`Success read!`);
        })
        .catch(error => console.error("Error:", error));
}

function onUpdate(ev) {
    ev.preventDefault();
    let data = JSON.stringify({
        //"id": String(document.getElementById("cidfield").value),
        number: String(document.getElementById("unumberfield").value),
        typeofcontribution: String(document.getElementById("utypefield").value),
        pin: String(document.getElementById("upinfield").value),
        balance: String(document.getElementById("ubalancefield").value),
        dateofcreation: String(document.getElementById("udatefield").value),
        user: String(document.getElementById("uuserfield").value)
    });

    fetch(
            "http://localhost:2403/account/" + document.getElementById("uidfield").value, {
                method: "PUT",
                body: data,
                headers: { "Content-Type": "application/json" }
            }
        )
        .then(response => response.json())
        .then(response => alert(`Object: 
                                ${response.number}, 
                                ${response.typeofcontribution},
                                ${response.balance},
                                ${response.dateofcreation},
                                ${response.user} - are updated.`))
        /*.then(response => console.log(`Object: 
                                ${response.number}, 
                                ${response.typeofcontribution},
                                ${response.balance},
                                ${response.dateofcreation},
                                ${response.user} - are updated.`))*/
        .catch(error => console.error("Error. Object are not update.", error));

}


function onDelete(ev) {
    ev.preventDefault();
    fetch(
            "http://localhost:2403/account/" + document.getElementById("uidfield").value, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            })
        .then(response => response.json())
        .then(response => console.log("Success delete:", JSON.stringify(response)))
        .catch(error => console.error("Error. Object are not delete.", error))
};


function parseAccountToTableRow(Accounts) {
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

    document.getElementById('cbutton').addEventListener('click', onCreate);
    document.getElementById('rbutton').addEventListener('click', onRead);
    document.getElementById('ubutton').addEventListener('click', onUpdate);
    document.getElementById('dbutton').addEventListener('click', onDelete);
    console.log('Handlers is set');
})();