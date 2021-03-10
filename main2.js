apiAll = 'https://restcountries.eu/rest/v2/all';
const listCountries = document.getElementById('countries-of-the-world');


async function showAllNamesAndPopulation () {

    try {
        const allEntriesResponse = await axios.get(apiAll);
        const { data } = allEntriesResponse;
        console.log(allEntriesResponse);
        data.sort((a, b) => {
            return a.population - b.population;
        });

        data.map((country) => {
            const { flag, name, region, population } = country;
            const singleCountry = document.createElement('li');
            singleCountry.setAttribute('class', 'single-country');

            const image = document.createElement('img');
            image.setAttribute('src', flag);
            image.setAttribute('class', 'flag');
            singleCountry.appendChild(image);

            const countryNameSpan = document.createElement('span');
            countryNameSpan.textContent = name;
            countryNameSpan.setAttribute('class', colorApplier(region));
            singleCountry.appendChild(countryNameSpan);

            listCountries.appendChild(singleCountry);

            const countryPopulation = document.createElement('p');
            countryPopulation.textContent = `this country has ${population} inhabitants`;
            countryPopulation.setAttribute('class', 'population-off');
            singleCountry.appendChild(countryPopulation);

            singleCountry.addEventListener('click', () => {
                populationToggle(countryPopulation);
            });
            });


    } catch (e) {
        console.error(e);
    }
}

//roep functie aan
showAllNamesAndPopulation();


//switcht de klasse op countryPopulation
function populationToggle(countryPopulation) {
    countryPopulation.classList.toggle('population-on');
}


//kleurtjes toewijzen
function colorApplier (data) {
    switch (data) {
        case 'Africa':
            return 'blue';
        case 'Americas':
            return 'green';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow';
        case 'Oceania':
            return 'purple';
        default:
            return 'default';
    }
}






