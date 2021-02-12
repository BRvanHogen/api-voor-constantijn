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
}

    const clickedButton = document.getElementById("search-button");
    clickedButton.addEventListener("click", generateUselessFacts);


//Zorg ervoor dat de opgehaalde data op de volgende manier wordt toegevoegd aan de DOM:

// [IMAGE: flag] --> staat onder response.data[0].flag
// [country-name] --> data[0].name
//     [country-naam] is situated in [subarea-name]. It has a population of [amount] people.
//     The capital is [city] and you can pay with [currency]'s
// They speak [language], [language] and [language]





// const url = "https://restcountries.eu/rest/v2/name/${country}?fullText=true";
// axios.get(url);




