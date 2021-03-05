const keuze = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?%-_&";

function bepaalRandomKarakter() {
    // verwerking
    let random = Math.floor(Math.random() * keuze.length) + 1;
    karakter = keuze[random-1];    

    // uitvoer
    return karakter;
}

function geldigKarakter(karakter, huidig_paswoord) {
    let geldig = false;
    if (huidig_paswoord.indexOf(karakter) == -1) {
        geldig = true;            
    }
    return geldig;
}

function maakPaswoord(aantal_tekens) {
    let paswoord = "";    
    for(let teller=0; teller<aantal_tekens; teller++) {
        let geldig_karakter = false;
        let karakter = "";                    
        do {             
            karakter = bepaalRandomKarakter();
            geldig_karakter = geldigKarakter(karakter, paswoord);
        } while (geldig_karakter == false)
        paswoord += karakter;
    }
    return paswoord;
}

// invoer
let aantal_tekens = parseInt(prompt("Aantal tekens?"));

// verwerking
let paswoord = maakPaswoord(aantal_tekens);

// uitvoer
console.log(paswoord);