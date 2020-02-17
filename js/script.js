const rickAndMortyUrl = "https://rickandmortyapi.com/api/character/";

fetch(rickAndMortyUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(json) {
        handleRickAndMorty(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function handleRickAndMorty(json) {

    const results = json.results;
    console.dir(results);

    const resultsContainer = document.querySelector(".row.results");

    let html = "";
    let typeValue;

    for(let i = 0; i < results.lenght; i++) {
        if(results[i].type) {
            typeValue = results[i].type;
        } else {
            typeValue = "Unknown";
        }
    }

   results.forEach(function(result) {
       html += `<div class="col-sm-6 col-md-4 col-lg-3">                
                    <div class="card">    
                    <img class="image" src="${result.image}" alt="Character Name">
                    <div class="details">
                    <h4 class="name">${result.name}</h4>
                    <p>Type: ${result.type}</p>    
                    <p>Episode count: ${result.episode}</p>                                  
               <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
           </div>
       </div>
   </div>`;
   });
   resultsContainer.innerHTML = html;
}