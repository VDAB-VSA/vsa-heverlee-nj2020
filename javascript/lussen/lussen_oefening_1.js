// invoer
let woord = prompt("Geef een woord");

// verwerken
let uitvoer = "";
for (let teller = 1; teller <= woord.length; teller++) {
    let letter = woord.charAt(woord.length - teller);
    uitvoer += letter;
}

// uitvoer
console.log(uitvoer);