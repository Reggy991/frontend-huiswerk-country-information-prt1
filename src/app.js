import axios from "axios";
import {errorHandling} from "./helperfunction";

console.log("Werkt dit nog?")

const countryList = document.getElementById("countries");
const inputField = document.getElementById("input-field");
const submitForm = document.getElementById("submit-form");

countryList.innerHTML = `<li class="placeholder-results">Please, enter a country to search.</li>`;

submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    void fetchCountries(inputField.value);
    inputField.value = "";
})

async function fetchCountries(countryName) {
    try {
        const response = await axios.get('https://restcountries.com/v2/all');
        console.log(response.data);

        const filteredCountries = response.data.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()));

        if (filteredCountries.length === 0) {
            countryList.innerHTML = `<li class="placeholder-results">I'm sorry, no matching countries found.</li>`;
            return;
        }

        const numResults = filteredCountries.length;
        const countryPlural = numResults === 1 ? 'country' : 'countries';
        const countryListItems = filteredCountries.map(country => {
            let currencyText = ` and you can pay with ${country.currencies[0].name}s`;

            if (country.currencies.length > 1) {
                currencyText += ` and ${country.currencies[1].name}s`
            }
            return `
            <li class="header-country"><img class="img-flag" src="${country.flag}" alt="image-flag"> <span class="country-name">${country.name}</span></li>
            <li>${country.name} is situated in ${country.subregion}. It has a population of ${country.population} people.</li>
            <li class="last-sentence">The capital is ${country.capital} ${currencyText}.</li>`;
        });
        countryList.innerHTML = `<li class="placeholder-results"><span class="countries-found">${numResults} matching ${countryPlural} found:</span></li>` + countryListItems.join("");
        } catch(error) {
        console.error(error);
        errorHandling(error);
    }
}

// fetchCountries("Georgia");








/*
const countryList = document.getElementById("countries");
async function fetchCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v2/all');
        console.log(response.data)

        // ?fields=name,flag,population,region
        // <img class="img-flag">${country.flag}</img>

        // Sorteer de data op populatie van laag naar hoog
        response.data.sort((a, b) => a.population - b.population);

        const countryListItems = response.data.map(country => {
            const region = country.region;
            const color = regionColor(region);
            return `
            <div class="country">
            <li style="color: ${color}"><img class="img-flag" src="${country.flag}" alt="image-flag"></li>
            <li>${country.name}</li>
            <li>${country.name} is situated in ${country.subregion}. It has a population of ${country.population} people</li>
            <li>The capital is ${country.capital} and you can pay with ${country.currencies.name}</li>
            </div>
            `;
        });
        countryList.innerHTML = countryListItems.join("");
    } catch(error) {
        // Errors afvangen in de console
        console.error(error);

        // Errors communiceren in de UI
        errorHandling(error);
    }
}

void fetchCountries();
*/
