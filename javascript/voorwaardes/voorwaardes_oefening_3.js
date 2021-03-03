// invoer
let email = prompt("Geef een e-mail adres");

// verwerking
let at_positie = email.indexOf("@");
let dot_positie = email.indexOf(".", at_positie);
let geldig_email = false;
let naam;
let domein;
let toplevel_domein;
if (at_positie > -1 && dot_positie > -1) {
    geldig_email = true;
    naam = email.substring(0, at_positie);
    domein = email.substring(at_positie +1, email.length);
    toplevel_domein = email.substring(dot_positie +1, email.length);
}
else {
    geldig_email = false;
}

// uitvoer
if (geldig_email == true) {
    console.log("e-mail: " + email);
    console.log("naam: " + naam);
    console.log("domein: " + domein);
    console.log("toplevel domein: " + toplevel_domein);
}
else {
    console.log("Ongeldig e-mail adres.");
}