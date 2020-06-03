
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
    .then((response) => response.json())
    .then((json) => characterDetails(json))
    .catch(() => {document.location.href = "error.html"});

    function characterDetails(character) {
        console.dir(character);
        
        document.title = character.name;

        const image = document.querySelector(".details-image");
        image.src = character.image;
        image.alt = character.name;

        const name = document.querySelector("h1");
        name.innerHTML = character.name;

        const status = document.querySelector("#status");
        status.innerHTML = character.status;

        const species = document.querySelector("#species");
        species.innerHTML = character.species;

        const origin = document.querySelector("#origin");
        origin.innerHTML = character.origin.name;

        const location = document.querySelector("#location");
        location.innerHTML = character.location.name;

    }
    
   
