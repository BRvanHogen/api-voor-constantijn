// -- [ ] Maak een functie die alle landen ophaalt en sorteert op grootte van de populatie, van laag naar hoog.

//-- [x] juiste endpoint zoeken om te zoeken op alle landen (https://restcountries.eu/rest/v2/all)
//-- [x] async functie schrijven om de info op te halen
//-- [ ] bedenken wat voor functie nodig is om te sorteren van hoog naar laag. Kwam dit voor in de les over arrayfuncties?
//          - wellicht dat we hier het destructuring al moeten gaan toepassen.
//          - const { name, population } = data[0];
//-- [ ] DOM manipuleren of list toevoegen aan HTML.

apiAll = 'https://restcountries.eu/rest/v2/all';

async function showAllEntries () {
    try {
        const allEntriesResponse = await axios.get(apiAll);
        console.log(allEntriesResponse);

        for (let i = 0; i < 249 ; i++) {
            const { name, population } = allEntriesResponse.data[i];
            console.log(name, population);
        }

    } catch (e) {
        console.error(e);
    }
}

//roep de functie aan:
showAllEntries();


