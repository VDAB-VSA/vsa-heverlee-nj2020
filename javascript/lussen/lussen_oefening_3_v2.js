// verwerken
let volgend = 2;
let aantal_priemgetallen = 0;
let priemgetallen = [];

do {
    // delingen tellen
    var deelbaar = 0;
    priemgetallen.forEach(function(priemgetal) {
        //% = modulus
        if (volgend % priemgetal == 0) {
            deelbaar++;
        }
    });
    
    // 1 en zichzelf
    if (deelbaar == 0 || deelbaar == 1) {
        priemgetallen.push(volgend);
        aantal_priemgetallen ++;
    }
    
    volgend++;
  
} while (aantal_priemgetallen < 30)

// uitvoer
console.log(priemgetallen.join(", "));