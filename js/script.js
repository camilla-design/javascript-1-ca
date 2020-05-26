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
    

   results.forEach(function(result) {

    if(result.types) {
        result.type = result.type;
    } else {
        result.type = "Unknown";
    }

       html += `<div class="col-sm-6 col-md-4 col-lg-3">                
                    <div class="card">    
                    <img class="image" src="${result.image}" alt="Character Name">
                    <div class="details">
                    <h4 class="name">${result.name}</h4>
                    <p>Type: ${result.type}</p>    
                    <p>Episode count: ${result.episode.length}</p>                                  
               <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
           </div>
       </div>
   </div>`;

 

   });
   resultsContainer.innerHTML = html;
}
