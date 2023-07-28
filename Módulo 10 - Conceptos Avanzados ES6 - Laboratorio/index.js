// (1) Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene
// una propiedad llamada id (debe devolver booleano true / false ).
// TIP: No accedas a 'id' con punto (.) o con corchetes ([]).
console.log("1) Ejercicio 'hasId': ");

const array1 = [
  { id: 1, name: "Paco" },
  { id: 2, name: "María" },
];
const array2 = [{ name: "Alicia" }, { id: 3, name: "Pedro" }];

const hasId = (properties) => properties.some((property) => property.id);

console.log(hasId(array1)); // Devuelve true, ya que al menos un objeto tiene la propiedad 'id'
console.log(hasId(array2)); // Devuelve true, ya que uno de los objetos tiene la propiedad 'id'

// (2) Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
// TIP: No utilices el corchete ([]) para acceder a la posición 0.

console.log("2) Ejercicio 'head': ");

const array = [1, 2, 3, 4, 5];

const head = ([first]) => first;

console.log(head(array)); // Devuelve 1

// (3) Implementa una función llamada tail tal que, dado un array como entrada,
// devuelva un nuevo array con todos los elementos menos el primero.
// TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.

console.log("3) Ejercicio 'tail': ");

const arr = ["one", 2, "three", 4, "five"];

const tail = ([firstElement, ...rest]) => rest;

console.log(tail(arr)); // Devuelve [2, "three", 4, "five"]

// (4) Implementa una función llamada swapFirstToLast tal que, dado un array como entrada,
// devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.
// TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.

console.log("4) Ejercicio 'swapFirstToLast': ");

const swapFirstToLast = ([firstElement, ...restElements]) => [
  ...restElements,
  firstElement,
];

const list = [1, 2, 3, 4, 5];

console.log(swapFirstToLast(list)); // Devuelve [2, 3, 4, 5, 1]

// (5) Implementa una función llamada excludeId tal que, dado un objeto como entrada,
// devuelva dicho objeto clonado excepto la propiedad id si la hubiera.
// TIP: No modifiques el objeto de entrada. Piensa en destructuring y rest.

console.log("5) Ejercicio 'excludeId': ");

const excludeId = ({ id, ...restProps }) => restProps;

const inputObj = { id: 1, name: "Francisco", age: 30, city: "Úbeda" };

const clonedObj = excludeId(inputObj);

console.log(clonedObj); // Devuelve { name: "Francisco", age: 30, city: "Úbeda" }

// (6) Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada,
// devuelva otro array filtrado con aquellas palabras que empiecen por a.
// TIP: No utilices bucles.

console.log("6) Ejercicio 'wordsStartingWithA':");

const wordsStartingWithA = (wordsArray) =>
  wordsArray.filter((word) => word[0].toLowerCase() === "a");

const inputArray = ["apple", "banana", "orange", "Avocado", "grape"];

const filteredWords = wordsStartingWithA(inputArray);

console.log(filteredWords); // Devuelve ["apple", "Avocado"]

// (7) Implementa una función llamada concat tal que admita múltiples argumentos de tipo string
// y devuelva otro string con la concatenación de todos, separados por | .
// TIP: No utilices bucles.

console.log("7) Ejercicio 'concat':");

const concat = (...args) => args.join("|");

const result = concat("apple ", " banana ", " orange ", " grape ");

console.log(result); // Devuelve "apple|banana|orange|grape"

// (8) Implementa una función llamada multArray que admita un array de números ( arr )
// y otro parámetro que sea un número ( x ) y devuelva un nuevo array
// donde cada elemento ha sido multiplicado por x.
// TIP: No utilices bucles.

console.log("8) Ejercicio 'multArray':");

const multArray = (arr, x) => arr.map((num) => num * x);

const numbers = [1, 2, 3, 4, 5];
const multiplier = 2;

const multipliedArray = multArray(numbers, multiplier);

console.log(multipliedArray); // Devuelve [2, 4, 6, 8, 10]

// (9) Implementa una función llamada calcMult que admita múltiples números como argumento
// y devuelva como resultado el producto de todos ellos.
// TIP: No utilices bucles.

console.log("9) Ejercicio 'calcMult':");

const calcMult = (...arguments) =>
  arguments.reduce((acc, curr) => acc * curr, 1);

const result2 = calcMult(2, 3, 4);
console.log(result2); // Devuelve 24 (2 * 3 * 4)

// (10) Implementa una función swapFirstSecond tal que dado un array,
// devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.
// TIP: No modifiques el array de entrada original.

console.log("10) Ejercicio opcional 'swapFirstSecond':");

const swapFirstSecond = ([firstElement, secondElement, ...restElements]) => [
  secondElement,
  firstElement,
  ...restElements,
];

const originalArray = [1, 2, 3, 4, 5];
const newArray = swapFirstSecond(originalArray);

console.log("Original Array:", originalArray); // Output: Original Array: [1, 2, 3, 4, 5]
console.log("New Array:", newArray); // Output: New Array: [2, 1, 3, 4, 5]

// (11) Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un
// carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
// TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).

console.log("11) Ejercicio opcional 'firstEqual':");

const firstEqual = (char, ...strings) =>
  strings.every((word) => word.startsWith(char));

console.log(firstEqual("a", "apple", "apricot", "avocado")); // Output: true
console.log(firstEqual("b", "banana", "orange", "pear")); // Output: false
console.log(firstEqual("c", "car", "cat", "camel")); // Output: true

// (12) Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.
// TIP: No utilices bucles. Hay diversas formas de hacerlo.

console.log("12) Ejercicio opcional 'longest':");

const longest = (...arrays) => arrays.sort((a, b) => b.length - a.length)[0];

const array3 = [1, 2, 3];
const array4 = [4, 5];
const array5 = [6, 7, 8, 9];

console.log(longest(array3, array4, array5)); // Output: [6, 7, 8, 9]

// (13) Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter,
// devuelva cuantas veces aparece dicho carácter en el string.
// TIP: No utilices bucles. Convierte el string a un array mediante Array.from() .

console.log("13) Ejercicio opcional 'searchInStringV1': ");

const searchInStringV1 = (string, character) =>
  Array.from(string).filter((c) => c === character).length;

const inputString = "hello world";
const characterToSearch = "l";
const outcome = searchInStringV1(inputString, characterToSearch);
console.log(outcome); // Output: 3 (hay tres 'l' en "hello world")

// (14) Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2
// encontrando otra alternativa sin usar reduce.
// TIP: No utilices bucles. Convierte el string a un array mediante Array.from().

console.log("14) Ejercicio opcional 'searchInStringV2: ");

const searchInStringV2 = (str, character) =>
  Array.from(str).filter((c) => c === character).length;

const outcome2 = searchInStringV2(inputString, characterToSearch);
console.log(outcome2); // Output: 3 (hay tres 'l' en "hello world")

// (15) Implementa una función llamada sortCharacters tal que dado un string,
// lo devuelva con sus letras ordenadas alfabéticamente.
// TIP: No utilices bucles. No modifiques el string original de entrada.
// TIP: Convierte el string a un array mediante Array.from() .

console.log("15) Ejercicio opcional 'sortCharacters: ");

const sortCharacters = (str) => Array.from(str).sort().join("");

const inputString2 = "buenos días";
const sortedString = sortCharacters(inputString2);
console.log(sortedString); // Output: "abdenossuí"

// (16) Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras
// concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
// TIP: No utilices bucles.

console.log("16) Ejercicio opcional 'shout': ");

const shout = (...words) =>
  words.map((word) => word.toUpperCase()).join("!") + "!";

console.log(shout("hello", " world")); // Output: "HELLO! WORLD!"
console.log(shout("javascript", " is", " great")); // Output: "JAVASCRIPT! IS! GREAT!"
console.log(shout("web", " programming")); // Output: "WEB! PROGRAMMING!"
console.log(shout("hi there")); // Output: "HI THERE!"

// (17) Lista de la compra:

console.log("17) Ejercicio opcional 'Lista de la compra: ");

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.

const shoppingCartWithIVA = shoppingCart.map((item) => ({
  ...item,
  iva: item.price * 0.21,
}));
console.log(shoppingCartWithIVA);

// B. Ordena la lista de más a menos unidades.

const sortedShoppingCart = shoppingCart.sort((a, b) => b.units - a.units);
console.log(sortedShoppingCart);

// C. Obtén el subtotal gastado en droguería.

const subtotalDrogueria = shoppingCart
  .filter((item) => item.category === "Droguería")
  .reduce((subtotal, item) => subtotal + item.price * item.units, 0);
console.log(subtotalDrogueria);

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

const productListByCategory = {};

shoppingCart.map(({ category, price, units }) => {
  productListByCategory[category] = (productListByCategory[category] || 0) + price * units;
});

Object.entries(productListByCategory).forEach(([category, totalPrice]) => {
  console.log(`${category} -> ${totalPrice.toFixed(2)} €`);
});
