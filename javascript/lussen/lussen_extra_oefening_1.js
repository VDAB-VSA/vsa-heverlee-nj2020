let zin = prompt("Geef een zin:");

woorden = zin.split(" ");

for (var woorden_teller = 0; woorden_teller < woorden.length; woorden_teller++) {
    woorden[woorden_teller] = woorden[woorden_teller][0].toUpperCase() + woorden[woorden_teller].substr(1);
}

let uitvoer = woorden.join(" ");

console.log(uitvoer);