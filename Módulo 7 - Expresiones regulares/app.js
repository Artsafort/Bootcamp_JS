//* CASO 1.
// Dado este IBAN:
// ES6600190020961234567890
// Validar que se informa con dos letras, y los números correspondientes.

const iban = "ES6600190020961234567890";
const regex = /^[A-Z]{2}\d+$/;

const isValid = regex.test(iban);
console.log(isValid); // true

// ****************************************

//* CASO 2.
// Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:
// ES6600190020961234567890
// ES66 0019 0020 9612 3456 7890


const iban2 = "ES66 0019 0020 9612 3456 7890";
const regex2 = /^[A-Z]{2}\d{2}(?:\s?\d{4}){5}$/;

const isValid2 = regex.test(iban.replace(/\s/g, ''));
console.log(isValid); // true

// ****************************************

//* CASO 3.
// Vamos a extraer el código de país y el dígito de control.

const iban3 = "ES6600190020961234567890";
const regex3 = /^([A-Z]{2})(\d{2})\d+$/;

const matches = iban3.match(regex3);
if (matches) {
  const countryCode = matches[1];
  const checkDigit = matches[2];
  console.log("Country Code:", countryCode); // ES
  console.log("Check Digit:", checkDigit); // 66
} else {
  console.log("Invalid IBAN");
};


// ****************************************

//* Validar matrícula coche.

// Caso 1:
// Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar:
// 2021 GMD
// 2345-GMD
// 4532BDB
// 0320-AAA

function validarMatricula(matricula) {
  // Expresión regular para validar la matrícula
  var patron = /^\d{4}\s?[A-Za-z]{3}$/;

  // Verificar si la matrícula coincide con el patrón
  return patron.test(matricula);
}

// Ejemplos de matrículas a validar
var matriculas = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

// Validar cada matrícula y mostrar el resultado
matriculas.forEach(function(matricula) {
  var esValida = validarMatricula(matricula);
  console.log(matricula + ": " + (esValida ? "Válida" : "No válida"));
});

// ****************************************

// Caso 2:

console.log("-----------------------");

// Vamos a extraer por un lado la parte numérica y por otro las letras.
var matriculas = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

function extraerPartesMatricula(matricula) {
  // Expresiones regulares para extraer la parte numérica y las letras
  var patronNumerico = /\d+/;
  var patronLetras = /[A-Za-z]+/;

  // Extraer la parte numérica y las letras de la matrícula
  var parteNumerica = matricula.match(patronNumerico)[0];
  var parteLetras = matricula.match(patronLetras)[0];

  return {
    numerica: parteNumerica,
    letras: parteLetras
  };
};

// Iterar sobre las matrículas y extraer las partes numérica y de letras
for (var i = 0; i < matriculas.length; i++) {
  var matricula = matriculas[i];

  // Extraer las partes numérica y de letras
  var partes = extraerPartesMatricula(matricula);

  // Mostrar el resultado
  console.log("Matrícula: " + matricula);
  console.log("Parte numérica: " + partes.numerica);
  console.log("Parte de letras: " + partes.letras);
  console.log("-----------------------");
}

// ****************************************

//* VALIDAR SINTAXIS TARJETA DE CRÉDITO. 

const cardNumbers = [
  "5299 6400 0000 0000",
  "5299-6400-0000-0000",
  "5299640000000000"
];

function validarTarjetaMastercard(numeroTarjeta) {
  const regex = /^(50|51|52|53|54|55)[0-9]{2}(\s|-)?[0-9]{4}(\s|-)?[0-9]{4}(\s|-)?[0-9]{4}$/;
  return regex.test(numeroTarjeta);
}

console.log("Resultados de validación:");
for (const numeroTarjeta of cardNumbers) {
  const esValida = validarTarjetaMastercard(numeroTarjeta);
  console.log(numeroTarjeta + ": " + (esValida ? "Válida" : "Inválida"));
};

//* BUSCAR EXPRESIONES REGULARES. 

// Expresiones regulares a buscar y validar.

const expresionesRegulares = [
  {
    nombre: "Comprobar clave fuerte",
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/,
    ejemplos: ["Abcd123!", "password123", "ABCD1234", "12345678!"],
  },
  {
    nombre: "Comprobar clave moderada",
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    ejemplos: ["Abcd1234", "Password", "abcd123", "12345678"],
  },
  {
    nombre: "Validar URL bien formada",
    regex: /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/[\w.-]*)*\/?$/,
    ejemplos: [
      "https://www.lemoncode.net",
      "www.lemoncode.net",
      "lemoncode.net",
      "https://www.lemoncode.net/articles",
    ],
  },
  {
    nombre: "Validar color hexadecimal",
    regex: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    ejemplos: ["#FF0000", "#00ff00", "#0000FF", "#123abc", "#fff", "#1234YZ"],
  },
];

// Función para validar una expresión regular y sus ejemplos
function validarExpresionRegular(expresionRegular) {
  console.log("Expresión regular: " + expresionRegular.nombre);
  console.log("------------------------------------------");
  for (const ejemplo of expresionRegular.ejemplos) {
    const esValido = expresionRegular.regex.test(ejemplo);
    console.log(ejemplo + ": " + (esValido ? "Válido" : "Inválido"));
  }
  console.log("\n");
}

// Validar todas las expresiones regulares
for (const expresionRegular of expresionesRegulares) {
  validarExpresionRegular(expresionRegular);
}
