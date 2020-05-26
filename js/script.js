const rickAndMortyUrl = "https://rickandmortyapi.com/api/character/";

fetch(rickAndMortyUrl)
    .then(function(response) { // convert to arrow function
        return response.json()
    })
    .then(function(json) {
        handleRickAndMorty(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function handleRickAndMorty(json) { // again change the param name here, try characterData or

    const results = json.results; // results is to generic, try be more descriptive, think like you are writing a good book, give your variable name meaning, character or user might be a good variable name
    console.dir(results);

    const resultsContainer = document.querySelector(".row.results");

    let html = "";
// there should only be 1 line space between lines of code, some times if the variable and the function call are related it is good to have the one after each other.

   results.forEach(function(result) { // what is results? choose a good descriptive variable name like "character"

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

// too many empty lines, tidy up your code us pretteir or something like that.

   });
   resultsContainer.innerHTML = html;
}
