const url = "https://dwapi.dev/item?project=LluG3gwZKPzC&entity=Werken";

async function laadWerken() {
    
    // laad request headers
    let antwoord = await fetch(url);
    
    // laad werken
    return antwoord.json();
}

function toonWerkenInTabel() {
    // invoer
    let werken = laadWerken();

    // verwerking
    werken.then( 
        data => { 
            let tabel = "<table>";
            data.result.items.forEach(function(rij) {
                tabel += "<tr><td>" + rij.Titel + "</td></tr>";
            });
            tabel += "</table>";

            // uitvoer
            document.getElementById("werken").innerHTML = tabel;            
         });
}

window.addEventListener('load', function(){
    toonWerkenInTabel();
});
