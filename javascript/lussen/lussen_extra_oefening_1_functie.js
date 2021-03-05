function verwerkZin(zin) {
    let woorden = zin.split(" ");

    for (var woorden_teller = 0; woorden_teller < woorden.length; woorden_teller++) {
        woorden[woorden_teller] = woorden[woorden_teller][0].toUpperCase() + woorden[woorden_teller].substr(1);
    }
    
    return woorden.join(" ");
}

//invoer
let zin = prompt("Geef een zin:");

//verwerk
let verwerkte_zin = verwerkZin(zin);

//uitvoer
console.log(verwerkte_zin);