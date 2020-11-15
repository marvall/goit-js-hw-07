const inputValidator = {
    inputText: document.querySelector("input#validation-input"),
}
const checkValidation  = function () {
    if (inputValidator.inputText.value.length === parseInt(inputValidator.inputText.getAttribute("data-length"))) {
        inputValidator.inputText.classList.add("valid");
        inputValidator.inputText.classList.remove("invalid");
    } else {
        inputValidator.inputText.classList.add("invalid");
        inputValidator.inputText.classList.remove("valid");
    }
}
inputValidator.inputText.addEventListener('blur', () => checkValidation());