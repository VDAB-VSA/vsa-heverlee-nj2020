// invoer
var vandaag = new Date();
var dagen = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

// verwerking
var dag = vandaag.getDate();
var maand = vandaag.getMonth()+1; 
var jaar = vandaag.getFullYear();
var weekdag = vandaag.getDay();

// uitvoer
console.log('mm-dd-yyyy: ' + maand+'-'+dag+'-'+jaar);
console.log('mm/dd/yyyy: ' + maand+'/'+dag+'/'+jaar);
console.log('dd-mm-yyyy: ' + dag+'-'+maand+'-'+jaar);
console.log('dd/mm/yyyy: ' + dag+'/'+maand+'/'+jaar);
console.log("het is dag " + weekdag + " van de week");
console.log("dat is een " + dagen[weekdag]);