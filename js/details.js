
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if(params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "index.html";
}

const baseUrl = `https://rickandmortyapi.com/api/character/`;
const detailsUrl = `${baseUrl}${id}`;

fetch(detailsUrl)
    .then(function(response) { // convert to arrow function
        return response.json();
    })
    .then(function(json) { // convert to arrow function, json is a good name for data here.
        createDetails(json); //  json is a good name for data here
    })
    .catch(function() { // convert to arrow function
        document.location.href = "error.html";
    });

    function createDetails(json) { // json is NOT a good name here, try be description of what the data is. give it a nice name
        console.dir(json);

        document.title = json.name; // so that when you call the variables here you can use it, card.name or character.name instead of json.nam which does read well.

        const image = document.querySelector(".details-image");
        image.src = json.image; // change all the parameter variable names to something more readable.
        image.alt = json.name;

        const name = document.querySelector("h1");
        name.innerHTML = json.name;

        const status = document.querySelector("#status");
        status.innerHTML = json.status;

        const species = document.querySelector("#species");
        species.innerHTML = json.species;

        const origin = document.querySelector("#origin");
        origin.innerHTML = json.origin.name;

        const location = document.querySelector("#location");
        location.innerHTML = json.location.name;
    }
    