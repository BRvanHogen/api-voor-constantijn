const api = "https://restcountries.eu/rest/v2/name/";

async function generateUselessFacts() {

    const userInput = document.getElementById("search-bar").value;
    const response = await axios.get(
        api + userInput);
    console.log("dit is de hele response", response);

    // tussen deze regel
    imageUrl = response.data[0].flag;
    const containerDiv = document.getElementById("container");
    const imageFlag = document.createElement("img");
    imageFlag.setAttribute("src", imageUrl);
    imageFlag.setAttribute("alt", "sorry Constantijn, hier ontbreekt de vlag!");
    containerDiv.appendChild(imageFlag);

    naamLand = response.data[0].name;
    const nameCountry = document.createElement("h2");
    nameCountry.setAttribute('class', 'pageInfo');
    nameCountry.innerText = naamLand;
    containerDiv.appendChild(nameCountry);

    //valuta
    if (response.data[0].currencies.length === 1) {
       valuta = response.data[0].currencies[0].name;
    } else {
        valuta = response.data[0].currencies[0].name
            + " or " + response.data[0].currencies[1].name;
    }
    //valuta

    //talen
    if (response.data[0].languages.length === 1) {
        language = response.data[0].languages[0].name;
    }

    if (response.data[0].languages.length === 2) {
        language = response.data[0].languages[0].name + " and " + response.data[0].languages[1].name;
    }
    if (response.data[0].languages.length === 3) {
        language = response.data[0].languages[0].name + ", " + response.data[0].languages[1].name + " and " +
            response.data[0].languages[2].name;
    }

    if (response.data[0].languages.length === 4) {
        language = response.data[0].languages[0].name + ", " + response.data[0].languages[1].name + ", " +
            response.data[0].languages[2].name + " and " + response.data[0].languages[3].name;
    }
    //talen

    informatie = response.data[0].name + " is situated in " + response.data[0].subregion + "." +
        " It has a population of " + response.data[0].population + " people. The capital is " +
        response.data[0].capital + " and you can pay with " + valuta + ". They speak " + language + ".";

    const countryInformation = document.createElement("p");
    countryInformation.setAttribute('class', 'pageInfo');
    console.log(countryInformation);
    countryInformation.innerText = informatie;
    containerDiv.appendChild(countryInformation);
    // en deze regel proberen we de feitjes te implementeren.

    //reset button. Clears input field after search is completed
    const reset = document.getElementById("search-bar");
    reset.value = "";
} // deze
    const clickedButton = document.getElementById("search-button");
    clickedButton.addEventListener("click", generateUselessFacts);

    const pressedKey = document.getElementById("search-bar");
    pressedKey.addEventListener("keydown", function (e){
    if (e.keyCode === 13) {
        generateUselessFacts(e);
    }
});



// Zorg ervoor dat er altijd maar één zoekresultaat op de pagina staat.

// -- [ ] info moet op de pagina blijven tot de volgende search
// -- [ ] we willen m.a.w. dat de eerste search-optie verschilt van de anderen
// -- [x] of zouden we sowieso de functie kunnen beginnen met een console.clear();? NOPE! DOET NIKS!
// -- [ ] oke, console clear deed het niet. Misschien kijken wat we kunnen doen bij de info implementatie?
// -- [ ]  window.location.reload(); ging te snel.
// -- [ ] kan de event listener niet registreren dat er iedere x na de eerste x muisklik/enter gerefresht moet worden?


