let aantal_tekens = parseInt(prompt("Aantal tekens?"));
let keuze = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?%-_&";

let paswoord = "";
for(let teller=0; teller<aantal_tekens; teller++) {
    geldig_karakter = false;
    let karakter = "";
    do {
        let random = Math.floor(Math.random() * keuze.length) + 1;
        karakter = keuze[random-1];
        if (paswoord.indexOf(karakter) == -1) {
            geldig_karakter = true;            
        }
    } while (geldig_karakter == false)
    paswoord += karakter;
}

console.log(paswoord);