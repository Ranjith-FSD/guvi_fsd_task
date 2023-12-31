const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');



xhr.onload = function () {
    const countries = JSON.parse(xhr.response);
    console.log(countries.filter(country => {
        if (country.region == 'Asia') {
            return true;
        }
    }).map(country => country.name.common));
}

xhr.send();