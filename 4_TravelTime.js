function travelTime(input) {
    // convert mixed-case string to first letter uppercase
    // others  - lowercase
    function fixCityName(name) {
        let result = name;
        if (name[0] >= 'a' && name[0] <= 'z') {
            result = name[0].toUpperCase() + name.substring(1);
        }
        return result;
    }

    let countries = new Map(); // map holding countries

    for (let line of input) { // process input
        [country, city, price] = line.split(' > '); // split current line to country, city, price
        price = Number(price); // parse price to number
        city = fixCityName(city); // fix city string format

        if (!countries.has(country)) { // country is not present in map
            countries.set(country, new Map()); // add country to map
        }
        if (!countries.get(country).has(city)) { // city is not present in country
            countries.get(country).set(city, price); // add city to country
        }

        if (countries.get(country).get(city) > price) { // is current price is lower that stored ?
            countries.get(country).set(city, price); // yes - update stored price
        }
    }
    let sortedCountries = Array.from(countries.keys()).sort(); //create array holding sorted country names
    for (let destinationCountry of sortedCountries) { // iterate sorted country names
        //create array holding city names, then sort it by travel cost
        let sortedCities = Array.from(countries.get(destinationCountry).keys()).sort((city1, city2) => {
            let c1 = countries.get(destinationCountry).get(city1);
            let c2 = countries.get(destinationCountry).get(city2);
            return c1 - c2;
        })
        let route = destinationCountry + ' -> '; // init current country route

        for (let destinationCity of sortedCities) { // iterate city names sorted by travel cost
            let currentPrice = countries.get(destinationCountry).get(destinationCity); // get current city travel cost
            route += (`${destinationCity} -> ${currentPrice} `); // add city name and travel cost to current route
        }
        console.log(route); // print route to console
    }
}

travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > sofia > 200",
    "Bulgaria > Varna > 80"
])