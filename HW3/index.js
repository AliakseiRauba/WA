function onCreate(ev) {
    ev.preventDefault();


    var data = JSON.stringify({
        "manufacturer": String(document.getElementById("cmanufacturer").value),
        "coreNumber": String(document.getElementById("ccoreNumber").value),
        "threadNumber": String(document.getElementById("cthreadNumber").value),
        "frequency": String(document.getElementById("cfrequency").value)
    });
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            alert(this.responseText);
            document.getElementById("createForm").dispatchEvent(new Event('submit'));
        }
    });

    xhr.open("POST", "http://ipAddres:2403/cpu");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onRead() {
    console.log('allah');
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            //console.log(this.response);
            result = JSON.parse(this.response);
            var resultTBody = document.createElement('tbody');
            result.map(function(nthCPU) {
                resultTBody.appendChild(parseCPUToTableRow(nthCPU));
            });

            var table = document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody, document.getElementById('rTBody'));
            resultTBody.id = 'rTBody';
            console.log('success');
        }
    });

    xhr.open("GET", "http://ipAddres:2403/cpu");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function onPrepareUpdate(ev) {

    ev.preventDefault();
    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;

    xhrids.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            //console.log(this.response);
            result = JSON.parse(this.response);
            var ids = document.createElement('select');
            ids.className = 'form-control';
            result.map(function(nthCPU) {
                var id = document.createElement('option');
                id.innerHTML = nthCPU['id'];
                ids.appendChild(id);
            });
            var form = document.getElementById('uid').parentElement;
            form.replaceChild(ids, document.getElementById('uid'));
            ids.id = 'uid';
        }
    });
    xhrids.open("GET", "http://ipAddres:2403/cpu/");
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onUpdate(ev) {
    ev.preventDefault();


    var data = JSON.stringify({
        "manufacturer": String(document.getElementById("umanufacturer").value),
        "coreNumber": String(document.getElementById("ucoreNumber").value),
        "threadNumber": String(document.getElementById("uthreadNumber").value),
        "frequency": String(document.getElementById("ufrequency").value)
    });
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PUT", "http://ipAddres:2403/cpu/" + document.getElementById("uid").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onDelete(ev) {
    ev.preventDefault();
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", "http://ipAddres:2403/cpu/" + document.getElementById("did").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parseCPUToTableRow(CPUs) {
    var row = document.createElement('tr');

    id = document.createElement('th');
    id.innerText = CPUs['id'];
    row.appendChild(id);

    manufacturer = document.createElement('td');
    manufacturer.innerText = CPUs['manufacturer'];
    row.appendChild(manufacturer);

    coreNumber = document.createElement('td');
    coreNumber.innerText = CPUs['coreNumber'];
    row.appendChild(coreNumber);

    threadNumber = document.createElement('td');
    threadNumber.innerText = CPUs['threadNumber'];
    row.appendChild(threadNumber);

    frequency = document.createElement('td');
    frequency.innerText = CPUs['frequency'];
    row.appendChild(frequency);

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
    document.getElementById('pubutton').addEventListener(
        'click', onPrepareUpdate
    );
    document.getElementById('dbutton').addEventListener(
        'click', onDelete
    );
    console.log('Handlers is set')
})()