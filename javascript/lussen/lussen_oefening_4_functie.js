const raster = [
[" ", "_" ,"_"],
[" ", "\\", " ", " ", "\\", " ", " ", " ", " ", " ", "_", " ", "_"],
[" ", " ", "\\", "*", "*", "\\", " ", "_", "_", "_", "\\", "/", " ", "\\"],
["X", "*", "#", "#", "#", "#", "#", "*", "+", "^", "^", "\\", "_", "\\"],
[" ", " ", "o", "/", "\\", " ", " ", "\\"],
[" ", " ", " ", " ", " ", "\\", "_", "_", "\\"]];

function toonRaster() {
    // verwerking
    let uitvoer = "";
    raster.forEach(function(raster_lijn) {
        uitvoer += raster_lijn.join("") + "\n";
    });

    // uitvoer
    return uitvoer;
}

// verwerking
uitvoer = toonRaster();

// uitvoer
console.log(uitvoer);