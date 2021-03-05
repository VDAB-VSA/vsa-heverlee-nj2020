function woordOmdraaien(woord) {
    // verwerken
    let omgedraaid = "";
    for (let teller = 1; teller <= woord.length; teller++) {
        let letter = woord.charAt(woord.length - teller);
        omgedraaid += letter;
    }

    // uitvoer
    return omgedraaid;
}

// invoer
let woord = prompt("Geef een woord");

// verwerken
let omgedraaid = woordOmdraaien(woord);

// uitvoer
console.log(omgedraaid);