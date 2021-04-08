const alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const woorden = ["appel", "peer", "ananas", "citroen", "meloen", "sinaasappel", "kiwi", "passievrucht", "aardbei", "framboos", "braambes", "bosbes", 
            "kiwibes", "mango", "papaya", "banaan", "druif", "mandarijn", "vijg", "perzik", "nectarine", "pruim", "abrikoos", "limoen", "kers", "granaatappel",
            "lychee", "pompelmoes", "stekelbes"];
const maximum_pogingen = 6;

let letters_gevonden = 0;
let woord = [];
let foute_pogingen;


/**
 * Start het programma bij het laden van de pagina
 */
function start(){
    toonAlfabet(); 
    nieuwSpel();
}

function nieuwSpel() {
    // globaal gedefineerd, "let" is hier niet nodig
    foute_pogingen = 0;
    toonPogingen();   

    // globaal gedefineerd, "let" is hier niet nodig
    woord = bedenkWoord();
    
    toonVraagtekens();
    document.getElementById("resultaat").innerHTML = "";
}

function toonAlfabet() {
    // toon alfabet
    var html = "";
    for (let letter_teller=0; letter_teller< alfabet.length; letter_teller++) {
        html += '<button id="alfabet_letter_' + alfabet[letter_teller] + '" data-letter="' + alfabet[letter_teller] + '">' + alfabet[letter_teller] + '</button>';
    }
    document.getElementById("alfabet").innerHTML = html;

    // koppel klik event
    let letter_knoppen = document.querySelectorAll('#alfabet button');
    letter_knoppen.forEach(letter_knop => letter_knop.addEventListener('click', event => {        
        let letter = letter_knop.dataset.letter;
        controleerLetter(letter);
    }));
}


function bedenkWoord() {
    var random_woord = woorden[Math.floor(Math.random() * woorden.length)];
    woord = random_woord.split("");
    
    // om te testen
    console.log(woord);

    return woord;
}

function toonVraagtekens() {
    var html = "";
    for (let letter_teller=0; letter_teller< woord.length; letter_teller++) {
        html += '<span id="letter_' + (letter_teller + 1) + '">?</span>';
    }
    document.getElementById("woord").innerHTML = html;
}

function toonPogingen() {
    var html = "";
    for(let poging_teller = 1; poging_teller <= maximum_pogingen; poging_teller++) {
        if (poging_teller <= foute_pogingen) {
            html += '<span class="rood" id="poging_' + poging_teller + '"><i class="far fa-times-circle"></i></span>';
        }
        else {
            html += '<span class="zwart" id="poging_' + poging_teller + '"><i class="far fa-times-circle"></i></span>';
        }
    }
    document.getElementById("pogingen").innerHTML = html;
}

/**
 * Bij het klikken op een letter
 * @param {*} letter 
 */
function controleerLetter(letter) {
    if (woord.indexOf(letter) > -1) {
        vulLettersIn(letter);
        if (letters_gevonden == woord.length) {
            gewonnen();
        }
    }
    else {
        nieuwePoging();
    }
    document.getElementById("alfabet_letter_" + letter).disabled = true;
}

/**
 * Bij het vinden van een letter in het woord worden de vraagtekens vervangen door de letter
 * @param {*} gekozen_letter 
 */
function vulLettersIn(gekozen_letter) {
    for (let letter_teller=0; letter_teller< woord.length; letter_teller++) {
        if (woord[letter_teller] == gekozen_letter) {
            letters_gevonden++;

            //vervang ? door letter
            document.getElementById("letter_" + (letter_teller + 1)).innerHTML = gekozen_letter;
        }
    }
}

/**
 * Na het controleren van een letter
 */
function nieuwePoging() {
    foute_pogingen++;
    toonPogingen();
    if (foute_pogingen == maximum_pogingen) {
        verloren();
    }
}

/**
 * Wanneer gewonnen
 */
function gewonnen() {
    maakAlfabetOnbruikbaar();
    document.getElementById("resultaat").innerHTML = "Proficiat, u bent gewonnen.";
}

/**
 * Wanneer verloren
 */
function verloren() {
    maakAlfabetOnbruikbaar();
    toonWoord();
    document.getElementById("resultaat").innerHTML = "Spijtig, u bent verloren.";
}

/**
 * Indien gewonnen of verloren
 */
function maakAlfabetOnbruikbaar() {
    for (letter_teller=0; letter_teller< alfabet.length; letter_teller++) {
        document.getElementById("alfabet_letter_" + alfabet[letter_teller]).disabled = true;
    }
}

/**
 * Indien verloren
 */
function toonWoord() {
    //vul elke letter van het woord in
    for (letter_teller=0; letter_teller< woord.length; letter_teller++) {       
        document.getElementById("letter_" + (letter_teller + 1)).innerHTML = woord[letter_teller];
    }
}