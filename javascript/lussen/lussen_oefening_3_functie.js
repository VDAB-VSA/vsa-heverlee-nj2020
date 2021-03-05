const aantal_te_tonen_priemgetallen = 30;

function bepaalPriemgetallen() {
    let volgend = 1;
    let priemgetallen = [];

    // verwerking
    do {
        if (isPriemGetal(volgend)){
            priemgetallen.push(volgend);
        }
        volgend++;
    } while (priemgetallen.length < aantal_te_tonen_priemgetallen) 

    return priemgetallen;
}

function isPriemGetal(getal) {
    let deling_teller = 0;
    for(let teller = 1; teller <= getal; teller++) {
        let mod = getal % teller;
        if (mod == 0) {
            deling_teller++;
        }
    }

    if (deling_teller == 2) {
        return true;
    }
    else {
        return false;
    }
}

// verwerking
priemgetallen = bepaalPriemgetallen();

// uitvoer
console.log(priemgetallen.join());