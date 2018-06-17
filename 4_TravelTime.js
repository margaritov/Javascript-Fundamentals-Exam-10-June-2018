function travelTime(input) {
    function fixCityName(name) {
        let result = name;
        if (name[0] >= 'a' && name[0] <= 'z') {
            result = name[0].toUpperCase() + name.substring(1);
        }
        return result;
    }

    let countries = new Map();

    for (let line of input) {
        [country, city, price] = line.split(' > ');
        price = Number(price);
        city = fixCityName(city);
        //console.log((`${country} ${city} ${price}`));

        if (!countries.has(country)) {
            countries.set(country, new Map());
        }
        if (!countries.get(country).has(city)) {
            countries.get(country).set(city, price);
        }

        if (countries.get(country).get(city) > price) {
            //update price
            countries.get(country).set(city, price);
        }
    }
    let sortedCountries = Array.from(countries.keys()).sort();
    for (let destinationCountry of sortedCountries) {
        let sortedCities = Array.from(countries.get(destinationCountry).keys()).sort((city1, city2) => {
                let c1 = countries.get(destinationCountry).get(city1);
                let c2 = countries.get(destinationCountry).get(city2);
                return c1 - c2;
            } )
        let route = destinationCountry + ' -> ';

        for (let destinationCity of sortedCities) {
            let currentPrice = countries.get(destinationCountry).get(destinationCity);
            route += (`${destinationCity} -> ${currentPrice} `);
        }
        console.log(route);
    }
}

travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > sofia > 200",
    "Bulgaria > Varna > 80"
])