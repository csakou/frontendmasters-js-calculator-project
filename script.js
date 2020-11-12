let firstNumber = 0;
let operator = "";

function storeCurrentNumber() {
    const currentNumber = getCurrentNumber();
    if (currentNumber !== "0") {
        firstNumber = parseInt(currentNumber, 10);
    }
}

function operateOnNumber(newNo) {
    document.getElementById('number-shown').innerHTML = newNo;
}

function concatOnNumber(newNo) {
    document.getElementById('number-shown').innerHTML += newNo;
}

function getCurrentNumber() {
    return document.getElementById('number-shown').innerHTML;
}

function numberReset() {
    document.getElementById('number-shown').innerHTML = 0;
}

document.getElementById('clr').addEventListener('click', clr);

function clr() {
    firstNumber = 0;
    operator = "";
    operateOnNumber(firstNumber);
}

function operation(op) {
    const currentNumber = getCurrentNumber();
    storeCurrentNumber();
    numberReset();
    operator = op;
}

document.getElementById('del').addEventListener('click', del);

function del() {
    const currentNumber = getCurrentNumber();
    
    if (currentNumber.length > 1 && currentNumber !== 0) {
        const newNumber = currentNumber.slice(0, -1);
        operateOnNumber(newNumber);
    }
    if (currentNumber.length === 1 && currentNumber !== 0) {
        operateOnNumber(0);
    }
}

document.getElementById("res").addEventListener('click', res);

function res() {
    const currentNumber = getCurrentNumber();
    if (firstNumber !== 0) {
        switch (operator){
            case "=":
                clr();
                break;
            case "/":
                if (currentNumber !== "0"){
                    firstNumber /= parseInt(currentNumber, 10);
                    firstNumber = firstNumber.toFixed(2);
                }
                break;
            case "*":
                firstNumber *= parseInt(currentNumber, 10);
                break;
            case "-":
                firstNumber -= parseInt(currentNumber, 10);
                break;
            case "+":
                firstNumber += parseInt(currentNumber, 10);
                break;
            default:
                console.log("Working, bitched!");
        }
        operateOnNumber(firstNumber);
    }
    operator = "=";
}

function numbersFunction(btnNo) {
    const currentNumber = getCurrentNumber();
    if (currentNumber.length === 1 && currentNumber === "0" ) {
        operateOnNumber(btnNo);
    }
    else {
        concatOnNumber(btnNo);
    }
}