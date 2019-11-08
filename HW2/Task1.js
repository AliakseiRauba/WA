var name;
var reversName;
var person;

function popUp() {
    person = prompt("Please enter your name", "Aliaksei");

    if (person == null || person == "") person = "name1";
    document.getElementById("username").innerHTML = person;

    if (/[0-9]/.test(person)) document.getElementById("reverssername").innerHTML = person.split("").reverse().join("");
    else document.getElementById("reverssername").innerHTML = person;

    person = person.split("");
    for (i = 0; i < person.length; i++) {
        if (i % 2 == 0) {
            person[i] = person[i].toUpperCase();
        } else {
            person[i] = person[i].toLowerCase();
        }
        console.log(person[i]);
    }
    person = person.join("");
    document.getElementById("reverssername").innerHTML = person;
}

function goToGoogle() {
    window.location = "http://google.com/";
}

function dropContent() {
    document.getElementById("username").innerHTML = "";
    document.getElementById("reverssername").innerHTML = "";

}