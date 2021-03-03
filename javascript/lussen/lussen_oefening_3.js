// invoer
let aantal_te_tonen_priemgetallen = 30;
let volgend = 1;
let priemgetallen = [];

// verwerking
do {
    let deling_teller = 0;
    for(let teller = 1; teller <= volgend; teller++) {
        let mod = volgend % teller;
        if (mod == 0) {
            deling_teller++;
        }
    }

    // deelbaar door 1 en zichzelf
    if (deling_teller == 2) {
        priemgetallen.push(volgend);
    }
    volgend++;
} while (priemgetallen.length < aantal_te_tonen_priemgetallen) 

// uitvoer
console.log(priemgetallen.join());