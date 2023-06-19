// const number1Button = document.getElementById("number-1");

const numberButtonCollection    = document.getElementsByClassName('number');
const operationAdd              = document.getElementById("operation-add");
const operationCalculation      = document.getElementById("operation-calculation");
const display                   = document.getElementById("display");

let calculatorSum   = 0;
let operator        = 0;

// number1Button.addEventListener('click', () => {
//     console.log("You clicked on number 1");
//     operator = 1;
//     display.innerHTML = 1;
// })

for (let i = 0; i < numberButtonCollection.length; i++){
    
        const element   = numberButtonCollection[i];
        const text      = +element.getAttribute('data-number');

    numberButtonCollection[i].addEventListener('click', () => {

        operator            = text;
        display.innerHTML   = text;
        
    });
}

operationAdd.addEventListener('click', () => {
    calculatorSum = calculatorSum + operator;
    display.innerHTML = calculatorSum;
});

operationCalculation.addEventListener('click', () => {
    display.innerHTML = calculatorSum;
});


// може да се викат елементи по id, class, name, attribute, tagname


// var променливите са глобални

// в JS всичко е обект
// с .getAttribute могат манипулират DOM обекти