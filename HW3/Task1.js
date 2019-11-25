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
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            alert(this.responseText);
            document.getElementById("createForm").dispatchEvent(new Event('create'));
        }
    });

    xhr.open("POST", "http://localhost:2403/account");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
    alert("Created!");
}

function onRead() {
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            result = JSON.parse(this.response);
            var resultTBody = document.createElement('tbody');
            result.map(function(nthCPU) {
                resultTBody.appendChild(parseCPUToTableRow(nthCPU));
            });

            var table = document.getElementById('tablebody').parentElement;
            table.replaceChild(resultTBody, document.getElementById('tablebody'));
            resultTBody.id = 'tablebody';
            console.log('success');
        }
    });

    xhr.open("GET", "http://localhost:2403/account");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parseCPUToTableRow(CPUs) {
    var row = document.createElement('tr');

    id = document.createElement('th');
    id.innerText = CPUs['id'];
    row.appendChild(id);

    number = document.createElement('td');
    number.innerText = CPUs['number'];
    row.appendChild(number);

    coretypeofcontribution = document.createElement('td');
    coretypeofcontribution.innerText = CPUs['coretypeofcontribution'];
    row.appendChild(coretypeofcontribution);

    pin = document.createElement('td');
    pin.innerText = CPUs['pin'];
    row.appendChild(pin);

    balance = document.createElement('td');
    balance.innerText = CPUs['balance'];
    row.appendChild(balance);

    dateofcreation = document.createElement('td');
    dateofcreation.innerText = CPUs['dateofcreation'];
    row.appendChild(dateofcreation);

    user = document.createElement('td');
    user.innerText = CPUs['user'];
    row.appendChild(user);

    return row;
}



(function() {

    document.getElementById('cbutton').addEventListener(
        'click', onCreate
    );
    document.getElementById('rbutton').addEventListener(
        'click', onRead
    );
    console.log('Handlers is set')
})()