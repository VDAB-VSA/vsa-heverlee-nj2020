// invoer
let bestandsnaam = prompt("Bestandsnaam?");

// verwerking
let extensie = bestandsnaam.split('.').pop();

// uitvoer
console.log("De extensie van bestandsnaam '" + bestandsnaam + "' = '" + extensie + "'");