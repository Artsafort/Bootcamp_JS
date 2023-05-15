const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.

const products = [
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];


// APARTADO 1. Generar HTML dinámico para representar selección de unidades
// para cada producto de la lista. 

//HTML  --> div id="product-list-container"

var container = document.getElementById("product-list-container");
var buttonCalculate = document.getElementById("calculate");
buttonCalculate.disabled = true;
buttonCalculate.addEventListener("click", () => showResults(products));

function createProduct(product) {
    var description = document.createElement("h5");
    var input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("name", "amount" + product.description + product.price);
    input.setAttribute("id", "item" + product.description + product.price);
    input.setAttribute("min", "0");
    input.setAttribute("max", product.stock);
    input.value = 0;
    input.addEventListener("change", event => {
        product.units = event.target.valueAsNumber;
        checkUnits();     
    });

    description.innerText = product.description + " " +" | " + 
    product.price + " " + "€/unidad" + " " + " | " + product.stock + " unidades disponibles" + " | " +
    product.tax + "% de IVA";
    description.setAttribute("type", "number");
    description.addEventListener("change", event => product.units = event.target.valueAsNumber);

    container.appendChild(description);
    container.appendChild(input);    
}

function showProducts(productsList) {
    for (var product of productsList) {
        createProduct(product);
    }
}

showProducts(products);

//APARTADO 2. Al pulsar el botón de calcular, el usuario deberá recibir el desglose de la factura 
//a través de 3 campos: subtotal , impuestos y total .

function showResults(productList) {

    var getSubtotal = (product) => {
        var subTotal = product.units * product.price;
        return subTotal;
    };

    var getTaxes = (product) => {
        var taxes = (product.price * product.units) * (product.tax / 100);        
        return taxes;
    };

    var totalCost = (productList) => {
        let total = 0;
        let totalTaxes = 0;
        let subTotal = 0;         

        for (var product of productList) {
            subTotal += getSubtotal(product);
            totalTaxes += getTaxes(product);            
            total = totalTaxes + subTotal;  
            if (subTotal === 0) {
                document.getElementById('calculate').disable = true;
            }      
        }

        return {
            total,
            totalTaxes,
            subTotal
        }        
    };
    var result = totalCost(productList);

    const total = document.createElement("h3");
    total.innerText = 'Total ' + result.total;
    container.appendChild(total);

    const subtotal = document.createElement("h3");
    subtotal.innerText = 'Sub Total ' + result.subTotal;
    container.appendChild(subtotal);

    const totalTaxes = document.createElement("h3");
    totalTaxes.innerText = 'Total Taxes ' + result.totalTaxes;
    container.appendChild(totalTaxes);
};

//EXTRA. Intenta hacer que el botón Calcular se habilite o deshabilite en función de 
//si el usuario ha elegido al menos 1 unidad de algún producto o no. Es decir:
//Si las unidades de todos los productos están a 0, el botón calcular se deshabilita.
//Si existe al menos 1 producto con 1 unidad seleccionada, el botón calcular se deberá habilitar.

// He declarado la función checkUnits dentro de la función createProduct, en
//input.addEventListener("change", event => {product.units = event.target.valueAsNumber;
//checkUnits()}); para que deshabilite el botón de calcular con el valor 0 presente en todos los inputs.

function checkUnits() {
    var allUnits = 0;
    for (var product of products) {
        if (product.units === 0) {
            allUnits++;            
        }
    }
    if (allUnits == products.length) {
        buttonCalculate.disabled = true;
    } else {
        buttonCalculate.disabled = false;
    }
}
