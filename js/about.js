
function replaceWords() {
    document.body.innerHTML = document.body.innerHTML.replace(/The/g, "Replaced").replace(/the/g, "replaced");
}

setTimeout(replaceWords, 3000);


