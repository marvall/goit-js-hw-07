const inputForm = {
    inputText: document.querySelector("input#name-input"),
    displayText: document.querySelector("span#name-output"),
} 
const displayText = function () {
    if (inputForm.inputText.value === "") {
        inputForm.displayText.textContent = "незнакомец"
    } else {
        inputForm.displayText.textContent = inputForm.inputText.value;
    }
}
inputForm.inputText.addEventListener('input', () => displayText());   