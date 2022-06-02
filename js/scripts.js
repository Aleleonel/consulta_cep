const addressForm = document.querySelector("#address-form"); 
const cepInput = document.querySelector("#cep");
const adressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");

const closeButton = document.querySelector("#close-message");

// validate cep input

cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);

    if (!onlyNumbers.test(key)) {
        e.preventDefault();
        return
    }
});

// get address event
cepInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value 

    // check if we have correct length
    if (inputValue.length === 8) {
        getAddress(inputValue);
    }
});

// Get customer address from animationPlayState: 
const getAddress = async (cep) => {
    toggleLoader();

    cepInput.blur();

    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(apiUrl);

    const data = await response.json();

    console.log(data)


};

// Show or hide loader
const toggleLoader = () => {

    const fadeElement = document.querySelector("#fade")
    const loaderElement = document.querySelector("#loader")

    fadeElement.classList.toggle("hide");
    loaderElement.classList.toggle("hide");

};
