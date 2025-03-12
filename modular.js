function modulo(a, b) {
    return ((a % b) + b) % b;
}

function modularAddition(a, b, mod) {
    return modulo(a + b, mod);
}

function modularSubtraction(a, b, mod) {
    return modulo(a - b, mod);
}

function modularMultiplication(a, b, mod) {
    return modulo(a * b, mod);
}

function calculate(operation) {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const mod = parseInt(document.getElementById('mod').value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || isNaN(mod)) {
        resultElement.textContent = 'Please enter valid numbers';
        resultElement.className = 'result visible';
        return;
    }

    if (mod <= 0) {
        resultElement.textContent = 'Modulus must be positive';
        resultElement.className = 'result visible';
        return;
    }

    let result;

    if(operation === 'add') {
        result = modularAddition(num1, num2, mod);
    }
    else if(operation === 'sub') {
        result = modularSubtraction(num1, num2, mod);
    }
    else {
        result = modularMultiplication(num1, num2, mod);
    }


    if (operation === 'add') {
        resultElement.textContent = `Addition Result: ${result}`;
    } else if (operation === 'mul') {
        resultElement.textContent = `Multiplication Result: ${result}`;
    }
    else {
        resultElement.textContent = `Subtraction Result: ${result}`;
    }

    resultElement.className = 'result visible';
}
