
const detailsUrl = `https://rickandmortyapi.com/api/character/1234`;


fetch(detailsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.dir(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function handleDetails(response) {
    return response.json();
}
function createDetails(json) {
    createDetails(json);
}
function handleError(error) {
    console.log(error);
}

function createDetails(json) {
    console.dir(json);

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const details = document.querySelectorAll(".detail-details.p");
    details.innerHTML = json.details;
}