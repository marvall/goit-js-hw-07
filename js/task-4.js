const buttons = {
    buttonDec: document.querySelector('button[data-action="decrement"]'),
    buttonInc: document.querySelector('button[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
    currentValue: 0,
}
console.log(buttons.currentValue);
const increment = function (){
    buttons.currentValue += 1;
    getValue();
}
const decrement = function (){
    buttons.currentValue -= 1;
    getValue();
}
const getValue = function () {
    buttons.counterValue.textContent = buttons.currentValue;
}
buttons.buttonInc.addEventListener('click', () => increment());
buttons.buttonDec.addEventListener('click', () => decrement());