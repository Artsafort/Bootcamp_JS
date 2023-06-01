// ***** NUEVO INTENTO *****
  
// ****** Encriptado *******

// Se definen las variables plainAlphabet y encryptedAlphabet que representan el alfabeto original y el alfabeto encriptado
// Luego se define la función searchIndex que busca la posición de una letra en el alfabeto. 
// La función transformLetter toma una letra y devuelve la letra encriptada utilizando los alfabetos definidos. 
// La función transformMessage encripta un mensaje completo letra por letra usando la función transformLetter. 
// Finalmente, se llama a transformMessage con el mensaje text, el alfabeto original y el alfabeto encriptado
// y se imprime el mensaje encriptado en consola, y, cuando el usuario intruduzca su mensaje, en página.

// Valores de plainAlphabet y encryptedAlphabet.

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function encrypt() {
    var input = document.getElementById("input").value;
    var encryptedMessage = transformMessage(input, plainAlphabet, encryptedAlphabet);
    document.getElementById("result").textContent = encryptedMessage;
  }
 
var text = "hola mundo";

var searchIndex = (str, letter) => {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) return i;
  }
  return -1;
};

// Función para transformar una letra encriptada

var transformLetter = (letter, plainAlphabet, encryptedAlphabet) => {
    var lowercaseLetter = letter.toLowerCase();
    var letterIndex = searchIndex(plainAlphabet, lowercaseLetter);
    if (letterIndex > -1) {
      var transformedLetter = encryptedAlphabet[letterIndex];

      // Conservar la mayúscula si la letra original era mayúscula

      if (letter === lowercaseLetter) {
        return transformedLetter;
      } else {
        return transformedLetter.toUpperCase();
      }
    } else {
      return letter;
    }
  };

var transformMessage = (message, plainAlphabet, encryptedAlphabet) => {
  var messageLowerCase = message.toLowerCase();
  var result = "";
  for (var letter of messageLowerCase) {
    result += transformLetter(letter, plainAlphabet, encryptedAlphabet);
  }

  return result;
};

// Encriptar el mensaje.

var encryptedMessage = transformMessage(text, plainAlphabet, encryptedAlphabet);
console.log("Mensaje encriptado:", encryptedMessage);

// ***** Desencriptado *****

// En este código, se ha invertido el orden de reversedPlainAlphabet y reversedEncryptedAlphabet para reflejar el proceso de desencriptado. 
// Luego, se crea la función decryptLetter que funciona de manera similar a transformLetter, pero, utilizando los alfabetos invertidos. 
// A continuación, se crea la función decryptMessage que desencripta cada letra del mensaje utilizando la función decryptLetter.
// Finalmente, se llama a decryptMessage con el mensaje encriptado encryptedMessage y los alfabetos invertidos, y se imprime el mensaje.

var encryptedMessage = "y:'q phae:";

// Invierte los valores de plainAlphabet y encryptedAlphabet

var reversedPlainAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var reversedEncryptedAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";

function decrypt() {
    var input = document.getElementById("input").value;
    var decryptedMessage = decryptMessage(input, reversedPlainAlphabet, reversedEncryptedAlphabet);
    document.getElementById("result").textContent = decryptedMessage;
  }

// Función para desencriptar una letra

var decryptLetter = (letter, reversedPlainAlphabet, reversedEncryptedAlphabet) => {
    var lowercaseLetter = letter.toLowerCase();
    var letterIndex = searchIndex(reversedPlainAlphabet, lowercaseLetter);
    if (letterIndex > -1) {
      var decryptedLetter = reversedEncryptedAlphabet[letterIndex];

      // Conservar la mayúscula si la letra original era mayúscula
      
      if (letter === lowercaseLetter) {
        return decryptedLetter;
      } else {
        return decryptedLetter.toUpperCase();
      }
    } else {
      return letter;
    }
  };

// Función para desencriptar un mensaje completo

var decryptMessage = (encryptedMessage, reversedPlainAlphabet, reversedEncryptedAlphabet) => {
  var decryptedMessage = "";

  for (var letter of encryptedMessage) {
    decryptedMessage += decryptLetter(letter, reversedPlainAlphabet, reversedEncryptedAlphabet);
  }

  
  return decryptedMessage;
};

// Desencriptar el mensaje

var decryptedMessage = decryptMessage(encryptedMessage, reversedPlainAlphabet, reversedEncryptedAlphabet);
console.log("Mensaje desencriptado:", decryptedMessage);