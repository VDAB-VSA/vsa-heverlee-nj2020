window.onload = function() {
    toonNaam();
    toonContactGegevens();

    document.getElementById("button_bewaar_naam").addEventListener('click', function() {
        bewaarNaam();
    })

    document.getElementById("button_bewaar_contact_gegevens").addEventListener('click', function() {
        bewaarContactGegevens();
    })
}

function bewaarNaam() {
    let naam = document.getElementById("naam").value;
    sessionStorage.setItem("naam", naam);
    toonNaam();
}

function bewaarContactGegevens() {
    let telefoon = document.getElementById("telefoon").value;
    let email = document.getElementById("email").value;
    let contact_gegevens = {
        "telefoon": telefoon,
        "email": email
    }
    sessionStorage.setItem("contact_gegevens", JSON.stringify(contact_gegevens));
    toonContactGegevens();
}

function toonNaam() {    
    let naam = sessionStorage.getItem("naam");
    if (naam != null) {
        let resultaat = "naam: " + naam;
        document.getElementById("div_naam").innerHTML = resultaat;
    }
}

function toonContactGegevens() {    
    let contact_gegevens = JSON.parse(sessionStorage.getItem("contact_gegevens"));
    if (contact_gegevens != null) {
        let resultaat = "";
        resultaat += "<div>telefoon: " + contact_gegevens.telefoon + "</div>";
        resultaat += "<div>email: " + contact_gegevens.email + "</div>";

        document.getElementById("div_contact_gegevens").innerHTML = resultaat;
    }
}