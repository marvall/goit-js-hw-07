const inputNumber = {
    inputNumber: document.querySelector('div#controls>input'),
    buttonRender: document.querySelector('div#controls>button[data-action="render"]'),
    buttonDetroy: document.querySelector('div#controls>button[data-action="destroy"]'),
    boxBlock: document.querySelector('div#boxes'),
    currentNumber: 0,
}
const getNumber = function(){  
    inputNumber.currentNumber = inputNumber.inputNumber.valueAsNumber;
}
const destroyBoxes = function(){
    inputNumber.boxBlock.innerHTML = '';
}
const getColor = function(){
    return '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
}
const createBoxes = function(amount){
    for(let i = 0; i < amount; i += 1){
        let box = document.createElement('div');
        box.setAttribute('style', `width: ${30+i*10}px; height:${30+i*10}px; background-color: ${getColor()}`);
        inputNumber.boxBlock.appendChild(box);
    }
}
inputNumber.inputNumber.addEventListener('input', () => getNumber());
inputNumber.buttonRender.addEventListener('click', () => createBoxes(inputNumber.currentNumber));
inputNumber.buttonDetroy.addEventListener('click', () => destroyBoxes());

