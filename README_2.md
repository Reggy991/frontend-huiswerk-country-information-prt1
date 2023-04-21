**Pseudo-code:**

GET request: https://restcountries.com/v3.1/all
GET request: https://restcountries.com/v3.1/all?fields=name,flag,currencies,region (alleen benodigde data)

1. End-point selecteren uit documentatie. Zie bovenstaande GET requests.
2. npm init
3. npm install - downgraden naar versie 14 zodat deze compatible is met dit project.
4. Als Parcel nog niet aanwezig is: npm install parcel --save-dev.
5. npm install axios
6. Asynchrone functie schrijven (en axios importeren).
7. Een GET request maken met axios (incl. await).
8. Try / catch blok schrijven om errors af te vangen.
9. Element in HTML maken, referentie opslaan vanuit JS
10. Data injecteren (map-methode)


