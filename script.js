// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// a.Get all the countries from Asia continent /region using Filter function/
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data);
    // console.log(result);
    var res = result.filter((ele)=>ele.region==="Asia");
    console.log(res)
    var final = res.forEach((ele) => console.log(ele.name.common));
        
    };
// . b.Get all the countries with a population of less than 2 lakhs using Filter function
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var countriesData = JSON.parse(data);
    
    var countriesWithPopulationLessThan200k = countriesData.filter(country => country.population < 200000);
    
    console.log(countriesWithPopulationLessThan200k);
};

// c.Print the following details name, capital, flag, using forEach function
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var countriesData = JSON.parse(data);

    countriesData.forEach(country => {
        console.log("name: " + country.name.common);
        console.log("capital: " + country.capital[0]);
        console.log("flag: " + country.flag);
        console.log("------------------------------");
    });
};

// d.Print the total population of countries using reduce function
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var countriesData = JSON.parse(data);

    var totalPopulation = countriesData.reduce((accumulator, country) => {
        return accumulator + (country.population || 0); // Ensure to handle cases where population data is missing
    }, 0);

    console.log("Total Population of all countries: " + totalPopulation);
};

// e.Print the country that uses US dollars as currency.
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var countriesData = JSON.parse(data);

    countriesData.forEach(country => {
        if (country.currencies && country.currencies.USD) {
            console.log("Country using US Dollar: " + country.name.common);
        }
    });
};

