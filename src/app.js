import axios from "axios";
import {errorHandling, regionColor} from "./helperfunction";

console.log("Werkt dit nog?")

const countryList = document.getElementById("countries");
async function fetchCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flag,population,region');
        console.log(response.data)

        // Sorteer de data op populatie van laag naar hoog
        response.data.sort((a, b) => a.population - b.population);

        const countryListItems = response.data.map(country => {
            const region = country.region;
            const color = regionColor(region);
            return `
            <div class="country">
            <li style="color: ${color}"><span class="img-flag">${country.flag}</span>${country.name.common}</li>
            <li>Has a population of ${country.population} people</li><br>
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
