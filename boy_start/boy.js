
let knop = document.getElementById("toon-prent");
knop.onclick = toonPrent;

let en = document.getElementById("en");
let fr = document.getElementById("fr");

en.onclick = vulKeuzelijst;
fr.onclick = vulKeuzelijst;

let dropdown = document.getElementsByName("prenten")[0];

let prefix = "en_";

function toonPrent() {
    let img = document.getElementById("prent");
    img.setAttribute("src", "images/" + prefix + dropdown.value + ".jpg");
}

function vulKeuzelijst() {
    console.log(en.checked);
    if (en.checked) {
        prefix = "en_";
        vulKeuzelijstMet(["brave","home","strength","who"]);
    } else if (fr.checked) {
        prefix = "fr_";
        vulKeuzelijstMet(["grand","mieux","petit"]);
    }
}

function vulKeuzelijstMet(opties) {
    console.log(opties);
    dropdown.innerHTML = "";
    for (let optie in opties) {
        let option = document.createElement("option");
        option.innerText = opties[optie];
        option.value = opties[optie];
        dropdown.appendChild(option);
    }
}