const hoofd_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kleine_letters = "abcdefghijklmnopqrstuvwxyz";
const cijfers = "0123456789";
const symbolen = "-&%$!-|*";

function controlleerKarakter(karakter, reeks) {
    if (reeks.indexOf(karakter) > -1) {
        return true;
    }
    return false;
}

function minstensEenHoofdLetter(paswoord){
    for(let positie = 0; positie < paswoord.length; positie++) {
        let karakter = paswoord.charAt(positie);
        if (controlleerKarakter(karakter, hoofd_letters)) {
            return true;
        }
    }
    return false;
}

function minstensEenKleineLetter(paswoord){
    for(let positie = 0; positie < paswoord.length; positie++) {
        let karakter = paswoord.charAt(positie);
        if (controlleerKarakter(karakter, kleine_letters)) {
            return true;
        }
    }
    return false;
}

function minstensEenSymbool(paswoord){
    for(let positie = 0; positie < paswoord.length; positie++) {
        let karakter = paswoord.charAt(positie);
        if (controlleerKarakter(karakter, symbolen)) {
            return true;
        }
    }
    return false;
}

function minstensTweeCijfers(paswoord){
    let cijfer_teller = 0;
    for(let positie = 0; positie < paswoord.length; positie++) {
        let karakter = paswoord.charAt(positie);
        if (controlleerKarakter(karakter, cijfers)) {
            cijfer_teller++;
        }
    }
    if (cijfer_teller < 2) {
        return false;
    }
    return true;
}


function geldigPaswoord(paswoord) {
    let boodschappen = [];
    if (paswoord.length < 10) {
        boodschappen.push("-> Paswoord moet minstens 10 karakters tellen.");
    }
    else {
        if (minstensEenHoofdLetter(paswoord) == false) {
            boodschappen.push("-> Een paswoord moet minstens 1 hoofdletter bevatten.");
        }
        if (minstensEenKleineLetter(paswoord) == false) {
            boodschappen.push("-> Een paswoord moet minstens 1 kleine letter bevatten.");
        }
        if (minstensTweeCijfers(paswoord) == false) {
            boodschappen.push("-> Een paswoord moet minstens 2 cijfers bevatten.");
        }
        if (minstensEenSymbool(paswoord) == false) {
            boodschappen.push("-> Een paswoord moet minstens een van deze symbolen bevatten: " + symbolen + "");
        }
    }

    if (boodschappen.length == 0) {
        boodschappen.push("Geldig paswoord");
    }

    return boodschappen;
}

let paswoord = prompt("Paswoord?");
let boodschappen = geldigPaswoord(paswoord);

console.log(boodschappen.join("\n"));