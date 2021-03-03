// invoer
let getal = prompt("Geef een getal");

// verwerking
let boodschap;
if (getal >= 1) {
switch (true) {
    case (getal >= 1 && getal <= 10):
        boodschap = "Het is een getal tussen 1 en 10";
        break;
    case (getal >= 11 && getal <= 20):
        boodschap = "Het is een getal tussen 11 en 20";
        break;
    case (getal >= 21 && getal <= 30):
        boodschap = "Het is een getal tussen 11 en 30";
        break;  
    default:
        boodschap = "Het is een getal boven 30";
    }
} else {
    boodschap = "Getal moet groter zijn of gelijk aan 1."
}

// uitvoer
console.log(boodschap);