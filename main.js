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
}

    const clickedButton = document.getElementById("search-button");
    clickedButton.addEventListener("click", generateUselessFacts);







// const url = "https://restcountries.eu/rest/v2/name/${country}?fullText=true";
// axios.get(url);




