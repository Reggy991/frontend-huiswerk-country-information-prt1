const errorMessage = document.getElementById("error");
export function errorHandling(error) {
    if (error.response.status === 404) {
        errorMessage.textContent = "Page not found | 404"
    } else if (error.response.status === 500) {
        errorMessage.textContent = "Internal server error | 500"
    } else {
        errorMessage.textContent = "Sorry, there was an error. Try again."
    }
}

export function regionColor(region) {
    const colors = {
        "Africa": "blue",
        "Americas": "green",
        "Asia": "red",
        "Europe": "yellow",
        "Oceania": "purple"
    };

    return colors[region];
}