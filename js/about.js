const counter = document.querySelector(".container content"); // looks like this is not being used, can be deleted if so.

function replaceWords() {
    document.body.innerHTML = document.body.innerHTML.replace(/The/g, "Replaced").replace(/the/g, "replaced");
}

setTimeout(replaceWords, 4000);


