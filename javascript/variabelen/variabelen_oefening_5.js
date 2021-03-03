// invoer
let tekst = prompt("Geef een tekst");

// verwerking
let eerste_letter = tekst.substring(0, 1);
let laatste_letter = tekst.substring(tekst.length-1, tekst.length);
let woorden = tekst.split(" ");
let eerste_woord = woorden[0];
let laatste_woord = woorden[woorden.length-1];

// uitvoer
console.log("Tekst: " + tekst);
console.log("Eerste letter: '" + eerste_letter + "'");
console.log("Laatste letter: '" + laatste_letter + "'");
console.log("Eerste woord: '" + eerste_woorden + "'");
console.log("Laatste woord: '" + laatste_woord + "'");