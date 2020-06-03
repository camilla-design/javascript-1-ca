const rickAndMortyUrl = "https://rickandmortyapi.com/api/character/";

fetch(rickAndMortyUrl)
    .then((response) => response.json())
    .then((json) => characterData(json))
    .catch((error) => console.log(error));

function characterData(json) {

    const results = json.results;
    console.dir(results);

    const resultsContainer = document.querySelector(".row.results");

    let html = "";

    results.forEach(function (characters) {

        if (characters.types) {
            characters.type = characters.type;
        } else {
            characters.type = "Unknown";
        }

        html += `<div class="col-sm-6 col-md-4 col-lg-3">                
                    <div class="card">    
                        <img class="image" src="${characters.image}" alt="Character Name">
                        <div class="details">
                            <h4 class="name">${characters.name}</h4>
                            <p>Gender: ${characters.gender}</p>
                            <p>Type: ${characters.type}</p>    
                            <p>Episode count: ${characters.episode.length}</p>                                  
                            <a class="btn btn-primary" href="details.html?id=${characters.id}">Details</a>
                        </div>
                    </div>
                </div>`;
    });
    resultsContainer.innerHTML = html;
}