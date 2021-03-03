let getallen = prompt("Geef 2 getallen gescheiden door een ','").split(",");

let getal_1 = getallen[0];
let getal_2 = getallen[1];

let boodschap;
if ((getal_1 >= 10 && getal_1 <= 20) && (getal_2 >= 10 && getal_2 <= 20)) {
    boodschap = "getal 1 en getal 2 liggen tussen 10 en 20";
}
else {
    boodschap = "getal 1 of getal 2 ligt niet tussen 10 en 20";
}

console.log("getal 1: " + getal_1);
console.log("getal 2: " + getal_2);
console.log(boodschap);