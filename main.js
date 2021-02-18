async function generateUselessFacts() {
    const response = await axios.get(
        "https://restcountries.eu/rest/v2/name/aruba?fullText=true");
    console.log("dit is de hele response", response);
    console.log(response.data[0].name + " is situated in", response.data[0].subregion + "." +
        " It has a population of " + response.data[0].population + " people. The capital is " +
        response.data[0].capital);

        if (response.data[0].currencies.length===1) {
            console.log("and you can pay with " + response.data[0].currencies[0].name); }
        else {
            console.log("and you can pay with " + response.data[0].currencies[0].name
                + " or " + response.data[0].currencies[1].name);
        }
    imageUrl = response.data[0].flag;  // of moet dit juist "https://restcountries.eu/data/abw.svg" zijn;
    const containerDiv = document.getElementById("container");
    const imageFlag = document.createElement("img");
    imageFlag.setAttribute("src", imageUrl);
    imageFlag.setAttribute("alt", "sorry Constantijn, hier ontbreekt de vlag!");
    containerDiv.appendChild(imageFlag);

    // tussen deze regel
    naamLand = response.data[0].name;
    const nameCountry = document.createElement("h2");
    nameCountry.innerText = naamLand;
    containerDiv.appendChild(nameCountry);

    informatie = response.data[0].name + " is situated in " + response.data[0].subregion + "." +
        " It has a population of " + response.data[0].population + " people. The capital is " +
        response.data[0].capital + ".";

    const countryInformation = document.createElement("p");
    console.log(countryInformation);
    countryInformation.innerText = informatie;
    containerDiv.appendChild(countryInformation);

    // en deze regel proberen we de feitjes te implementeren.Let op de } hieronder!
}

    const clickedButton = document.getElementById("search-button");
    clickedButton.addEventListener("click", generateUselessFacts);


// Bonusopdracht: Maak een functie die ongeacht het aantal talen die in een land gesproken worden, een string maakt:
// 1 taal: They speak [language]
// 2 talen: They speak [language] and [language]
// 3 talen: They speak [language], [language] and [language]
// etc.


//Zorg ervoor dat de opgehaalde data op de volgende manier wordt toegevoegd aan de DOM:

// [IMAGE: flag] --> staat onder response.data[0].flag
// [country-name] --> data[0].name
//     [country-naam] is situated in [subarea-name]. It has a population of [amount] people.
//     The capital is [city] and you can pay with [currency]'s
// They speak [language], [language] and [language]


//---------------------------------------
//8.  Maak een inputveld op de pagina en zorg ervoor dat als de gebruiker op enter drukt,
//     de functie wordt aangeroepen waarmee de gegevens over België worden opgehaald.

const pressedKey = document.getElementById("search-bar");
pressedKey.addEventListener("keydown", function (e){
    if (e.keyCode === 13) {             //voor de keyCode moest ik even disable inspection doen, was struckthrough
    generateUselessFacts(e);
    }
});
//-------------------------------------------------------------------------------
// 9. Zorg ervoor dat de waarde uit het input veld wordt gebruikt als query voor het GET request.
// Er moet alleen een request gedaan worden als de gebruiker op enter drukt, of op de zoek-knop klikt.
// Tip: gebruik een globale variabele.




// document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         // code for enter
//     }
// });

// const url = "https://restcountries.eu/rest/v2/name/${country}?fullText=true";
// axios.get(url);




