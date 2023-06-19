console.log("-----------");

//* CUADRADO. 

var square = (n, char) => {
    for (var i = 0; i < n; i++) {
      var row = "";
      for (var j = 0; j < n; j++) {
        row += char;
      }
      console.log(row);
    }
  }
  
  //* Ejemplo.

  square(4, "*");

  //* Markdown

    "****"  
    "****"
    "****"
    "****"

  //* CUADRADO CON BORDE. 
  
console.log("-----------");

  var squareWithBorder = (n, charBorder, charInner) => {
    for (var i = 0; i < n; i++) {
      var row = "";
      for (var j = 0; j < n; j++) {
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
          row += charBorder;
        } else {
          row += charInner;
        }
      }
      console.log(row);
    }
  }
  
  //* Ejemplo. 

  squareWithBorder(4, "B", "*");

//* Markdown

    // BBBB
    // B**B
    // B**B
    // BBBB

    
//* CUADRADO DIAGONAL LEFT-RIGHT

console.log("-----------");

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
    for (var i = 0; i < n; i++) {
      var row = "";
      for (var j = 0; j < n; j++) {
        if (j < i) {
          row += charUp;
        } else if (j === i) {
          row += charDiagonal;
        } else {
          row += charDown;
        }
      }
      console.log(row);
    }
  }
  
squareDiagonalLR(6, "\\", "A", "B");


console.log("-----------");

//* CUADRADO DIAGONAL RIGHT-LEFT

var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
  for (var i = 0; i < n; i++) {
    var row = "";
    for (var j = 0; j < n; j++) {
      if (j < n - i - 1) {
        row += charUp;
      } else if (j === n - i - 1) {
        row += charDiagonal;
      } else {
        row += charDown;
      }
    }
    console.log(row);
  }
}

squareDiagonalRL(6, "/", "A", "B");

console.log("-----------");

//* MEDIO DIAMANTE.

var halfDiamond = (n, char) => {
  for (var i = 1; i <= n; i++) {
    var row = '';
    for (var j = 1; j <= i; j++) {
      row += char;
    }
    console.log(row);
  }

  for (var i = n - 1; i >= 1; i--) {
    var row = '';
    for (var j = 1; j <= i; j++) {
      row += char;
    }
    console.log(row);
  }
};

halfDiamond(8, "*");

//* PIRÁMIDE.

console.log("-----------");

var pyramid = (n, char) => {
  for (var i = 1; i <= n; i++) {
    var spaces = ' '.repeat(n - i);
    var row = char.repeat(2 * i - 1);
    console.log(spaces + row + spaces);
  }
};

pyramid(5, "*");

//* PIRAMID.

console.log("-----------");

var piramid2 = (n, char) => {

  // Mitad superior del diamante

  for (var i = 1; i <= n; i++) {
    var spaces2 = '';
    var row2 = '';
    for (var j = 0; j < n - i; j++) {
      spaces2 += ' ';
    }
    for (var j = 0; j < 2 * i - 1; j++) {
      row2 += char;
    }
    console.log(spaces2 + row2 + spaces2);
  }
}

piramid2(5, "*");

//* DIAMOND. 

console.log("-----------");

var diamond = (n, char) => {

  // Mitad superior del diamante

  for (var i = 1; i <= n; i++) {
    var spaces = '';
    var row = '';
    for (var j = 0; j < n - i; j++) {
      spaces += ' ';
    }
    for (var j = 0; j < 2 * i - 1; j++) {
      row += char;
    }
    console.log(spaces + row + spaces);
  }

  // Mitad inferior del diamante (sin repetir el centro)

  for (var i = n - 1; i >= 1; i--) {
    var spaces = '';
    var row = '';
    for (var j = 0; j < n - i; j++) {
      spaces += ' ';
    }
    for (var j = 0; j < 2 * i - 1; j++) {
      row += char;
    }
    console.log(spaces + row + spaces);
  }
}

diamond(5, '*');

console.log("-----------");
