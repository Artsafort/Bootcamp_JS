// Establecemos variables implicadas

var a;
var b;
var result;
var store = 0;
var operation = "";

// Vinculamos los valores de los inputs

// a = () => parseInt(document.getElementById("input-numberA").value);

// b = () => parseInt(document.getElementById("input-numberB").value);

var getInputValue = (idName) => parseInt(document.getElementById(idName).value);

var setOperations = () => {
    store = getInputValue("input-numberA");

    if (isNaN(store)) {
        operation = "";
        document.getElementById("final-result").innerText = "Ha ocurrido un error";
    } else {

        if (operation == "") {
            result = store;
        } else {

            switch (operation) {
                case "+":
                    result = result + store;
                    console.log("Suma");
                    break;
                case "-":
                    result = result - store;
                    console.log("Resta");
                    break;
                case "*":
                    result = result * store;
                    console.log("Multiplica");
                    break;
                case "/":
                    result = result / store;
                    console.log("Divide");
                    break;
                default: console.log("Error"); break;
            }

        }
    }

}

// Declaramos las funciones de los operadores

var add = () => {

    console.log("entrar metodo add");

    setOperations();

    operation = "+";
}


var substract = () => {

    console.log("entrar metodo substract");
    setOperations();
    operation = "-";
}

var multiply = () => {

    console.log("entrar metodo multiply");
    store = getInputValue("input-numberA");
    setOperations();
    operation = "*";
}

var divide = () => {

    console.log("entrar metodo divide");
    store = getInputValue("input-numberA");
    setOperations();
    operation = "/";
}

var makes = () => {

    console.log("entrar metodo makes");
    store = getInputValue("input-numberA");
    setOperations();
    operation = "";
    return result;
}
// Vinculamos el input de resultado h3

var showResultMakes = () => document.getElementById("final-result").innerText = makes();


// Eventos ==> se activan las funciones

document.getElementById("add").addEventListener("click", add);

document.getElementById("substract").addEventListener("click", substract);

document.getElementById("multiply").addEventListener("click", multiply);

document.getElementById("divide").addEventListener("click", divide);

document.getElementById("makes").addEventListener("click", showResultMakes);