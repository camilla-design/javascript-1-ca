// FIRSTNAME
const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("This form is submitted");
}

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if(checkInput(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }


function checkInput(value) {
    const trimmedValue = value.trim();

    if(trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

// LASTNAME

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const lastNameValue = lastName.value;

if(checkInput(lastNameValue) === true) {
    lastNameError.style.display = "none";
} else {
    lastNameError.style.display = "block";
}

function checkInput(lastNameValue) {
    const trimmedLastNameValue = lastNameValue.trim();

    if(trimmedLastNameValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

// EMAIL
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const emailValue = email.value;

if(checkInput(emailValue)) {
    emailError.style.display = "none";
} else {
    emailError.style.display = "block";
}

const invalidEmailError = document.querySelector("#invalidEmailError");

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

// MESSAGE

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageValue = message.value;

if(checkInput(messageValue)) {
    messageError.style.display = "none";
} else {
    messageError.style.display = "block";
}

function checkInput(messageValue) {
    const trimmedMessage = messageValue.trim();

    if(trimmedMessage.length > 10) {
        return true;
    } else {
        return false;
    }
}