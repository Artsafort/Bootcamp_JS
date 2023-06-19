// FUNCIONES BÁSICAS

//* Implementa una función que muestre por consola "Hola mundo"

var hola = () => console.log('Hola mundo');
hola();

//* Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona. 

var saluda = nombre => console.log('Hola ' + nombre);
saluda('Artin');

//* Implementa una función que, dado un string como parámetro, devuelva el string en mayúsculas.

var mayusculas = text => text.toUpperCase();
console.log(mayusculas('pasar de minúsculas a mayúsculas'));

//* Implementa una función que, dado un string como parámetro, devuelva el string en minúsculas. 

var minusculas = text => text.toLowerCase();
console.log(minusculas('PASAR DE MAYÚSCULAS A MINÚSCULAS'));

//* Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos. 

var suma = (a, b) => a + b;
console.log(suma(3, 5));

//* Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3. 

var concatenacion = (a, b, c) => a + " " + b + " " + c;
console.log(concatenacion('hola', 'me llamo', 'Artin'));

//* Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada 'id'
// inicializada a null.

var addParameter = (object, propName, value) => {
    object[propName] = value;
}

var myObject = {
    name: 'Artin',
    age: '35',
}

addParameter(myObject, 'id', null);
console.log(myObject);

// ***** FUNCIONES CON IF/ELSE, SWITCH Y COMPROBACIONES *****

//* Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null.

function isUndefinedOrNull(param) {
    if (param === undefined || param === null) {
      return true;
    } else {
      return false;
    }
  };

var value1; // undefined
var value2 = null;
var value3 = 42;

console.log(isUndefinedOrNull(value1)); // true
console.log(isUndefinedOrNull(value2)); // true
console.log(isUndefinedOrNull(value3)); // false

  
//* Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.

function determinarSigno(numero) {
    if (numero > 0) {
      return "positivo";
    } else if (numero < 0) {
      return "negativo";
    } else if (numero === 0) {
      return "cero";
     } else {
      return NaN;
     }
    };

console.log(determinarSigno("N")); // "positivo"
console.log(determinarSigno(5)); // "positivo"
console.log(determinarSigno(-3)); // "negativo"
console.log(determinarSigno(0)); // "cero"

//* Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que
// 100 o exactamente 100.

function compararNumero(numero) {
    if (numero > 100) {
      console.log("El número es mayor que 100");
    } else if (numero < 100) {
      console.log("El número es menor que 100");
    } else {
      console.log("El número es exactamente 100");
    }
  };
  
compararNumero(150); // El número es mayor que 100
compararNumero(50); // El número es menor que 100
compararNumero(100); // El número es exactamente 100

//* Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’
// o no.

function tienePropiedadName(objeto) {
    if ('name' in objeto) {
      return true;
    } else {
      return false;
    }
  };

var objeto1 = { name: 'Artin', age: 35 };
var objeto2 = { age: 45 };

console.log(tienePropiedadName(objeto1)); // true
console.log(tienePropiedadName(objeto2)); // false

//* Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.

function esDivisible(num1, num2) {
    if (num1 % num2 === 0) {
      return true;
    } else {
      return false;
    }
  };

console.log(esDivisible(10, 2));  // true
console.log(esDivisible(7, 3));   // false
console.log(esDivisible(15, 5));  // true

  
//* Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de
// caracteres.

function verificarLongitud(string, numeroCaracteres) {
    if (string.length === numeroCaracteres) {
      return true;
    } else {
      return false;
    }
  }
  
var string1 = "Hola";
var string2 = "Hola Mundo";
var numeroCaracteres = 4;

console.log(verificarLongitud(string1, numeroCaracteres));  // Resultado: true
console.log(verificarLongitud(string2, numeroCaracteres));  // Resultado: false


//* Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la
// semana es (en texto).

function obtenerDiaSemana(numero) {
    var dia;
  
    switch (numero) {
      case 1:
        dia = "Lunes";
        break;
      case 2:
        dia = "Martes";
        break;
      case 3:
        dia = "Miércoles";
        break;
      case 4:
        dia = "Jueves";
        break;
      case 5:
        dia = "Viernes";
        break;
      case 6:
        dia = "Sábado";
        break;
      case 7:
        dia = "Domingo";
        break;
      default:
        dia = "Número de día inválido";
        break;
    }
  
    return dia;
  }
  
  var numeroDia = 3;
  console.log(obtenerDiaSemana(numeroDia));  // Resultado: "Miércoles"
  
//* Implementa una función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.

function obtenerNombreMes(numero) {
    var mes;
  
    switch (numero) {
      case 1:
        mes = "Enero";
        break;
      case 2:
        mes = "Febrero";
        break;
      case 3:
        mes = "Marzo";
        break;
      case 4:
        mes = "Abril";
        break;
      case 5:
        mes = "Mayo";
        break;
      case 6:
        mes = "Junio";
        break;
      case 7:
        mes = "Julio";
        break;
      case 8:
        mes = "Agosto";
        break;
      case 9:
        mes = "Septiembre";
        break;
      case 10:
        mes = "Octubre";
        break;
      case 11:
        mes = "Noviembre";
        break;
      case 12:
        mes = "Diciembre";
        break;
      default:
        mes = "Número de mes inválido";
        break;
    }
  
    return mes;
  }
  
var numeroMes = 7;
console.log(obtenerNombreMes(numeroMes));  // Resultado: "Julio"

//*Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.

function obtenerArrayMasLargo(array1, array2) {
    if (array1.length > array2.length) {
      return array1;
    } else if (array2.length > array1.length) {
      return array2;
    } else {
      return "Los arrays tienen la misma longitud";
    }
  };
  
var primerArray = [1, 2, 3, 4, 5];
var segundoArray = [1, 2, 3];

console.log(obtenerArrayMasLargo(primerArray, segundoArray));  // Resultado: [1, 2, 3, 4, 5]


//* Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es
// igual o no.

// Primer tipo de función. 

function verificarPrimerElementoIgual(array1, array2) {
    if (array1[0] === array2[0]) {
      return "El primer elemento de ambos arrays es igual.";
    } else {
      return "El primer elemento de ambos arrays es diferente.";
    }
  };

// Segundo tipo de función, tras observar el curso enlatado.

var primerElementoIgual = (array1, array2) => Array.isArray(array1) && Array.isArray(array2)
&& array1[0] === array2[0];

var array1 = [1, 2, 3];
var array2 = [1, 4, 5];

console.log(verificarPrimerElementoIgual(array1, array2));  
// Resultado: El primer elemento de ambos arrays es igual.

