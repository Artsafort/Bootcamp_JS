// Establecemos variables implicadas

var a;
var b;
var result;

// Vinculamos los valores de los inputs

var getInputValue = (idName) => parseInt(document.getElementById(idName).value);

// Declaramos las funciones de los operadores

var add = () => {

    if (isNaN(getInputValue("input-numberA")) || isNaN(getInputValue("input-numberB"))) {
        result = "Ha ocurrido un error";
    } else {
        result = getInputValue("input-numberA") + getInputValue("input-numberB");
    }
    console.log("El resultado es ", result);
    return result;
}
var substract = () => {

    if (isNaN(getInputValue("input-numberA")) || isNaN(getInputValue("input-numberB"))) {
        result = "Ha ocurrido un error";
    } else {
        result = getInputValue("input-numberA") - getInputValue("input-numberB");
    }
    console.log("El resultado es ", result);
    return result;
}

var multiply = () => {

    if (isNaN(getInputValue("input-numberA")) || isNaN(getInputValue("input-numberB"))) {
        result = "Ha ocurrido un error";
    } else {
        result = getInputValue("input-numberA") * getInputValue("input-numberB");
    }
    console.log("El resultado es ", result);
    return result;
}

var divide = () => {

    if (isNaN(getInputValue("input-numberA")) || isNaN(getInputValue("input-numberB"))) {
        result = "Ha ocurrido un error";
    } else {
        result = getInputValue("input-numberA") / getInputValue("input-numberB");
    }
    console.log("El resultado es ", result);
    return result;
}
// Vinculamos el input de resultado h3

var showResultAdd = () => document.getElementById("button-submit").innerText = add();

var showResultsubstract = () => document.getElementById("button-submit").innerText = substract();

var showResultMultiply = () => document.getElementById("button-submit").innerText = multiply();

var showResultDivide = () => document.getElementById("button-submit").innerText = divide();


// Eventos ==> se activan las funciones

document.getElementById("add").addEventListener("click", showResultAdd);

document.getElementById("substract").addEventListener("click", showResultsubstract);

document.getElementById("multiply").addEventListener("click", showResultMultiply);

document.getElementById("divide").addEventListener("click", showResultDivide);

