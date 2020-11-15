const inputSize = {
    inputSize: document.querySelector("input#font-size-control"),
    displayText: document.querySelector("span#text"),
}
const checkSize = function () {
    inputSize.displayText.style.fontSize = `${inputSize.inputSize.valueAsNumber}px`;
}
inputSize.inputSize.addEventListener('input', () => checkSize());