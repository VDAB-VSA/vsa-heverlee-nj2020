const hoofd_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kleine_letters = "abcdefghijklmnopqrstuvwxyz";
const cijfers = "0123456789";
const symbolen = "-&%$!-|*";


function controlleerVoorkomen(paswoord, reeks, min_aantal) {
    let aantal = 0;
    for(let positie = 0; positie < paswoord.length; positie++) {
        let karakter = paswoord.charAt(positie);
        if (reeks.indexOf(karakter) > -1) {
            aantal++;
        }
    }
    if (aantal < min_aantal) {
        return false;
    }
    return true; // aantal >= min_aantal
}

function geldigPaswoord(paswoord) {
    let boodschappen = [];
    if (paswoord.length < 10) {
        boodschappen.push("-> Paswoord moet minstens 10 karakters tellen.");
    }
    else {
        if (controlleerVoorkomen(paswoord, hoofd_letters, 1) == false) {
            boodschappen.push("-> Een paswoord moet minstens 1 hoofdletter bevatten.");
        }
        if (controlleerVoorkomen(paswoord, kleine_letters, 1) == false) {
            boodschappen.push("-> Een paswoord moet minstens 1 kleine letter bevatten.");
        }
        if (controlleerVoorkomen(paswoord, cijfers, 2) == false) {
            boodschappen.push("-> Een paswoord moet minstens 2 cijfers bevatten.");
        }
        if (controlleerVoorkomen(paswoord, symbolen, 1) == false) {
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