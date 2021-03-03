// invoer
let getallen_tabel = [    
    [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10", "10"],
    ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "10"],
    ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "10"],
    ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "10"]
];

// verwerking
let getallen_lijnen = [];
getallen_tabel.forEach(function(tabel_lijn) {
    let getallen_lijn = "| " + tabel_lijn.join(" | ") + " |";    
    getallen_lijnen.push(getallen_lijn);
});

let streep = "-".repeat(getallen_lijnen[0].length - 2);

let uitvoer = "";
uitvoer += "┌" + streep + "┐" + "\n";
uitvoer += getallen_lijnen.join("\n") + "\n";
uitvoer += "└" + streep + "┘";

// uitvoer
console.log(uitvoer);