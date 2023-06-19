//* FUNCIONES CON ARRAYS

//* Implementa una función que admita un array de números, y devuelva el segundo elemento, 
// y en caso de no existir, devuelva ‘undefined’.

function obtenerSegundoElemento(array) {
  if (array.length >= 1) {
    return array[1];
  } else {
    return undefined;
  }
};

var numeros = [1, 2, 3, 4];

console.log(obtenerSegundoElemento(numeros));  // Resultado: 2

var otroArray = [5];

console.log(obtenerSegundoElemento(otroArray));  // Resultado: undefined



//* Implementa una función que admita un string como parámetro y devuelva la última letra.

console.log("------------");

function obtenerUltimaLetra(texto) {
  if (texto.length > 0) {
    return texto.charAt(texto.length - 1);
  } else {
    return undefined;
  }
;}

var texto  = "Hola";

console.log(obtenerUltimaLetra(texto));  // Resultado: "a"

var textoVacio = "";

console.log(obtenerUltimaLetra(textoVacio));  // Resultado: undefined

//* Segunda forma de hacer esto mismo.

console.log("------------");

var textString = "Regar las macetas";
var getLastLetter = str => {
  var lastLetter = str.length - 1;
  return str[lastLetter];
}

console.log(getLastLetter(textString));

//* Tercera forma de hacer esto. 

console.log("------------");

let str = "Hola";

var capturaString = (str) => {
  return str.slice(-1);
}

console.log(capturaString(str));

//* Implementa una función que dado un array, intercambie el primer elemento por el último. 
// Muestra por consola el resultado

console.log("------------");

function intercambiarPrimerUltimo(array) {
  if (array.length >= 2) {
    var primerElemento = array[0];
    var ultimoElemento = array[array.length - 1];

    array[0] = ultimoElemento;
    array[array.length - 1] = primerElemento;
  }

  console.log(array);
};

// Aplicación práctica.

var miArray = [1, 2, 3, 4, 5];
intercambiarPrimerUltimo(miArray);  // Resultado: [5, 2, 3, 4, 1]

//* Segunda forma de hacer esto.

console.log("------------");

var changeFirstToLast = (miArray) => {
  var first = miArray.splice(0, 1);
  console.log(miArray);
  var last = miArray.splice(-1, 1);
  console.log(miArray);
  miArray.unshift(last[0]);
  miArray.push(first[0]);
  return miArray;
}

console.log(changeFirstToLast(miArray));

//* FUNCIONES CON BUCLES. 

//* Implementa una función que admita 2 parámetros, un número y un texto, 
// y que muestre por consola dicho texto tantas veces como indique el número.

console.log("------------");

function mostrarTextoRepetido(num, texto) {
  for (var i = 0; i < num; i++) {
    console.log(texto);
  }
};

// Ejemplo

mostrarTextoRepetido(3, "Hola");  // Muestra por consola "Hola" tres veces

//* Implementa una función que admita como parámetro un objeto cualquiera y 
// devuelva el número de propiedades que tiene el objeto.

console.log("------------");

function obtenerNumeroPropiedades(objeto) {
  var contador = 0;
  for (var propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) {
      contador++;
    }
  }
  return contador;
};

// Ejemplo

var persona = {
  nombre: "Artin",
  edad: 35,
  ciudad: "Málaga"
};

var numeroPropiedades = obtenerNumeroPropiedades(persona);
console.log("El objeto tiene", numeroPropiedades, "propiedades");

//* Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.

console.log("------------");

function mostrarValoresPropiedades(objeto) {
  for (var propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) {
      var valor = objeto[propiedad];
      console.log(propiedad + ": " + valor);
    }
  }
};

// Ejemplo 

var persona = {
  nombre: "Artin",
  edad: 35,
  ciudad: "Málaga"
};

mostrarValoresPropiedades(persona);

//* Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento
// del array multiplicado por dicho número. Devuelve el resultado.

console.log("------------");

function sumarElementosMultiplicados(array, multiplicador) {
  var suma = 0;
  for (var i = 0; i < array.length; i++) {
    suma += array[i] * multiplicador;
  }
  return suma;
};

// Ejemplo

var numeros = [1, 2, 3, 4, 5];
var multiplicador = 5;

var resultado = sumarElementosMultiplicados(numeros, multiplicador);
console.log(resultado); // Resultado: 75

//* Segunda forma de hacer esto. For of, indicado para arrays.

console.log("------------");

var multArray = (arr, x) => {
  var result = 0;
  for (var item of arr){
    result += item * x;
  }
  return result;
}

console.log(multArray([1, 2], 2));

//* Implementa una función que dado un string como parámetro y también un carácter, 
// devuelva cuantas veces aparece dicho carácter en el string.

console.log("------------");

function contarCaracteres(str, caracter) {
  var contador = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === caracter) {
      contador++;
    }
  }
  return contador;
};

// Ejemplo

var texto = "Hola mundo";
var caracterBuscado = "o";

var cantidad = contarCaracteres(texto, caracterBuscado);
console.log(cantidad);

//* Segunda forma de pintar esto. 

console.log("------------");

var searchInString = (str, target) => {
  var occurrences = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === target) occurrences++;
    }
    return occurrences;
}

console.log(searchInString("hola cómo estás", "o"));

//* Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, 
// mostrando cada elemento por consola.

console.log("------------");

function mostrarElementos(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

// Ejemplo 
var array = [1, 2, "Hola", true];
mostrarElementos(array);

//* Segunda forma de pintar esto. 

console.log("------------");

var showArrayItems = arr => {
  for (var item of arr) {
    console.log(item);
  }
};

showArrayItems([1, 2, "Hola", true]);
 
//* Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, 
// y lo muestre por consola.

console.log("------------");

function mostrarElementosAlReves(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
};

// Ejemplo 

var array = [1, 2, "Hola", true];
mostrarElementosAlReves(array);


//* Implementa una función que dado un array de números, y otro parámetro que sea un número, 
// diga cuantos elementos son menores a dicho número, y cuántos no.

console.log("------------");

function contarElementos(array, numero) {
  var menores = 0;
  var mayores = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] < numero) {
      menores++;
    } else {
      mayores++;
    }
  }

  console.log("Cantidad de elementos menores a", numero + ":", menores);
  console.log("Cantidad de elementos mayores o iguales a", numero + ":", mayores);
};

// Ejemplo

var numeros = [10, 5, 20, 8, 15];
var numeroComparacion = 12;
contarElementos(numeros, numeroComparacion);

//* Segunda forma de pintar esto.

console.log("------------");

var numStats = (arr, num) => {
  var result = [0, 0, 0]; // menor, igual, mayor [0, 1, 2]
  for (var item of array) {
    if (item === num) result[1]++;
    else if (item < num) result [0]++;
    else result [2]++;
} 
  return result;
};

console.log(numStats([2, 4, -1, 6], 4));

//* Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, 
// se encuentra en el segundo.

console.log("------------");

function verificarElementos(arrayUno, arrayDos) {
  for (var i = 0; i < arrayUno.length; i++) {
    var elemento = arrayUno[i];
    if (arrayDos.includes(elemento)) {
      console.log("El elemento", elemento, "se encuentra en el segundo array.");
    } else {
      console.log("El elemento", elemento, "no se encuentra en el segundo array.");
    }
  }
};

// Ejemplo 

var arrayUno = [1, 2, 3];
var arrayDos = [3, 4, 5];
verificarElementos(arrayUno, arrayDos);

//* Segunda foma de hacer lo anterior.

console.log("------------");

function verificarElementos(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    var elemento = array1[i];
    var encontrado = false;
    for (var j = 0; j < array2.length; j++) {
      if (array2[j] === elemento) {
        encontrado = true;
        break;
      }
    }
    if (encontrado) {
      console.log("El elemento", elemento, "se encuentra en el segundo array.");
    } else {
      console.log("El elemento", elemento, "no se encuentra en el segundo array.");
    }
  }
};

// Ejemplo

var array1 = [1, 2, 3];
var array2 = [3, 4, 5];
verificarElementos(array1, array2);

//* Tercera forma de pintar esto. 

console.log("------------");

var anyInCommon = (arr1, arr2) => {
  for (var a of arr1) {
    for (var b of arr2) {
      if (a === b) return true;
    }
  }
  return false;
}

console.log(anyInCommon([1, 2, 3], [3, 5, 6]))

//* Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero 
// en el segundo y viceversa. Muestra los arrays transformados por consola.

console.log("------------");

function intercambiarArrays(array1, array2) {
  console.log("Arrays originales:");
  console.log("Array 1:", array1);
  console.log("Array 2:", array2);

  var temp = array1.slice();
  array1.length = 0;
  Array.prototype.push.apply(array1, array2);
  array2.length = 0;
  Array.prototype.push.apply(array2, temp);

  console.log("Arrays transformados:");
  console.log("Array 1:", array1);
  console.log("Array 2:", array2);
};

// Ejemplo  

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
intercambiarArrays(array1, array2);

//* Segunda forma de hacer esto mismo, pero, sin método prototype.push.apply y sin slice. 

console.log("------------");

function intercambiarArrays(array1, array2) {
  console.log("Arrays originales:");
  console.log("Array 1:", array1);
  console.log("Array 2:", array2);

  var temp = [];

  // Copiar elementos de array1 a temp

  for (var i = 0; i < array1.length; i++) {
    temp[i] = array1[i];
  }

  // Copiar elementos de array2 a array1

  array1.length = array2.length; // Ajustar longitud de array1
  for (var i = 0; i < array2.length; i++) {
    array1[i] = array2[i];
  }

  // Copiar elementos de temp a array2
  array2.length = temp.length; // Ajustar longitud de array2
  for (var i = 0; i < temp.length; i++) {
    array2[i] = temp[i];
  }

  console.log("Arrays transformados:");
  console.log("Array 1:", array1);
  console.log("Array 2:", array2);
};

// Ejemplo 

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
intercambiarArrays(array1, array2);

//* Tercera forma de pintar esto. 

console.log("------------");

var swapArrays = (arr1, arr2) => {
  var i = 0;
  while (i < arr1.length && i < arr2.length) {
    var tmp = arr1[i];
    arr1[i] = arr2 [i];
    arr2[i] = tmp;
    i++;
  }
  console.log(arr1, arr2);
}
swapArrays([1, 2], ["a", "b"]);

//* Implementa una función que admita un array como argumento, y construya un objeto en el que almacene 
// cada uno de los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.
console.log("------------");

function construirObjeto(array) {
  var objeto = {};

  for (var i = 0; i < array.length; i++) {
    var propiedad = 'prop' + (i + 1);
    objeto[propiedad] = array[i];
  }

  return objeto;
};

// Ejemplo  

var miArray = ['elemento1', 'elemento2', 'elemento3'];
var miObjeto = construirObjeto(miArray);
console.log(miObjeto);


//* Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado.
// Muestra por consola cada elemento por el que iteres.

console.log("------------");

function iterateArrayFromIndex(array, startIndex) {
  for (var i = startIndex; i < array.length; i++) {
    console.log(array[i]);
  }
};  

var myArray = [1, 2, 3, 4, 5];
iterateArrayFromIndex(myArray, 2);

//* Segunda forma de pintar esto. Insistiendo en que sea un número positivo. 

console.log("------------");

var iterateArrayFrom = (arr, startIndex) => {
  if (startIndex < arr.length && startIndex >= 0) {
    for (var i = startIndex; i < arr.length; i++) {
      console.log(arr[i]);
    } 
  }
}

iterateArrayFrom(["uno", "dos", "tres"], 1);

//* Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.

console.log("------------");

function checkStringExistence(array, searchString) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === searchString) {
      return true;
    }
  }
  return false;
};

var myArray = ["apple", "banana", "orange", "grape"];
var searchString = "banana";
var exists = checkStringExistence(myArray, searchString);
console.log(exists); // true

//* Segunda forma de pintar esto mismo. 

console.log("------------");

var search = (arr, target) => {
  for (var item of arr) {
    if (item === target) return true;
  }
  return false;
};

console.log(search([1, 2], 1));

//* Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden
// pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y
// otra función equivalente que haga la traducción inversa.

console.log("------------");

var frutasEspanol = ["manzana", "naranja", "platano", "mango"];
var frutasIngles = ["apple", "orange", "banana", "mango"];

function traducirEspanolAIngles(fruta) {
  var index = frutasEspanol.indexOf(fruta);
  if (index !== -1) {
    return frutasIngles[index];
  } else {
    return "No se encontró la traducción.";
  }
};

function traducirInglesAEspanol(fruta) {
  var index = frutasIngles.indexOf(fruta);
  if (index !== -1) {
    return frutasEspanol[index];
  } else {
    return "No se encontró la traducción.";
  }
};

console.log(traducirEspanolAIngles("naranja")); // "orange"
console.log(traducirInglesAEspanol("banana")); // "platano"
console.log(traducirEspanolAIngles("pera")); // "No se encontró la traducción."
console.log(traducirInglesAEspanol("grape")); // "No se encontró la traducción."

//* Segunda manera de pintar esto. 

console.log("------------");

var fEn = ["apple", "orange", "banana"];
var fEs = ["manzana", "naranja", "plátano"];

var translateFruitsToEs = fruit => fEs[fEn.indexOf(fruit)];
var translateFruitsToEn = fruit => fEn[fEs.indexOf(fruit)];

console.log(translateFruitsToEs("orange"));
console.log(translateFruitsToEn("manzana"));

//* Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.

console.log("------------");

function mostrarTextoAlReves(texto) {
  var textoAlReves = "";
  for (var i = texto.length - 1; i >= 0; i--) {
    textoAlReves += texto[i];
  }
  console.log(textoAlReves);
};

mostrarTextoAlReves("Hola mundo!"); // "!odnum aloH"
mostrarTextoAlReves("JavaScript"); // "tpircSavaJ"
mostrarTextoAlReves("OpenAI"); // "IAnepo"


//* Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.

console.log("------------");

function formatoAlternado(texto) {
  var palabras = texto.split(" ");
  var resultado = "";
  
  for (var i = 0; i < palabras.length; i++) {
    var palabra = palabras[i];
    
    for (var j = 0; j < palabra.length; j++) {
      if (j % 2 === 0) {
        resultado += palabra[j].toUpperCase();
      } else {
        resultado += palabra[j].toLowerCase();
      }
    }
    
    resultado += " ";
  }
  
  return resultado.trim();
}

// Ejemplo

var texto = "Este es mi texto";
console.log(formatoAlternado(texto)); // "EsTe Es Mi TeXtO"

var otroTexto = "Hola a todos";
console.log(formatoAlternado(otroTexto)); // "HoLa A ToDoS"

//* Segunda forma de pintar lo anterior. 

console.log("------------");

var funCapitals = text => {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    result += i % 2 === 0 ? text[i].toUpperCase() : text[i];
  }
  return result;
};

console.log(funCapitals("hola caracola"));


//* Implementa una función que admita como parámetro un array de arrays. La función debe recorrer 
// todos los elementos de cada subarray y mostrarlos por consola.

console.log("------------");

function mostrarArrays(arrays) {
  for (var i = 0; i < arrays.length; i++) {
    var subarray = arrays[i];
    
    for (var j = 0; j < subarray.length; j++) {
      console.log(subarray[j]);
    }
  }
};

// Ejemplo 

var arrays = [
  [1, 2, 3],
  ['a', 'b', 'c', 'd'],
  [true, false]
];

mostrarArrays(arrays);

//* Segunda forma de pintar esto. 

console.log("------------");

var iterateSubItems = arr => {
  for (var subArr of arr) {
    for (var item of subArr) {
      console.log(item);
    }
  }
};

var myArr = [[1, 2], ["inicio", "fin"], "hola"];
iterateSubItems(myArr);