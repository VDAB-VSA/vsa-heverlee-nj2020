function fiboGetallen(aantal) {
    let fibo_getallen = [0, 1];

    // verwerking
    do {
        let laatste_fibo_getal = fibo_getallen[fibo_getallen.length - 1];
        let voorlaatste_fibo_getal = fibo_getallen[fibo_getallen.length - 2];
        let niew_fibo_getal = voorlaatste_fibo_getal + laatste_fibo_getal;
        fibo_getallen.push(niew_fibo_getal);
    } while (fibo_getallen.length < aantal_fibo_tonen)

    // uitvoer
    return fibo_getallen;
}

// invoer
let aantal_fibo_tonen = parseInt(prompt("Hoeveel Fibonacci getallen tonen?"));

// verwerken
fibo_getallen = fiboGetallen(aantal_fibo_tonen);

// uitvoer
console.log(fibo_getallen.join(", "));