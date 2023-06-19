//* AGENDA.
//* Implementar una agenda para un equipo de personas, de modo que nos indique que horas tienen libres 
//* y que horas están ocupados. Además, vamos a generar un algoritmo que haga una búsqueda en un equipo 
//* y determine cual es la primera hora en que todos los miembros del equipo están libres, 
//* para asi poder establecer una reunión. Es decir, que busque el primer hueco disponible en sus agendas.

console.log("    A G E N D A :");

// Constantes

var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];

// Datos

var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true)
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true)
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true)
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true)
  }
];

// Generar la disponibilidad aleatoria de los miembros del equipo. 

function generarDisponibilidadAleatoria() {
  for (var i = 0; i < myTeam.length; i++) {
    var member = myTeam[i];
    for (var j = 0; j < member.availability.length; j++) {

      // Generar aleatoriamente true o false para la disponibilidad.

      member.availability[j] = Math.random() < 0.5;
    }
  }
};

// Mostrar por consola la disponibilidad de los miembros del equipo.

function mostrarDisponibilidad() {
  for (var i = 0; i < myTeam.length; i++) {
    var member = myTeam[i];
    console.log("Disponibilidad de", member.name);
    for (var j = 0; j < member.availability.length; j++) {
      var hour = WORK_HOURS[j];
      var available = member.availability[j] ? "Si" : "No";
      console.log("  " + hour + ": " + available);
    }
  }
};

// Buscar el primer hueco libre en las agendas de los miembros del equipo.

function buscarHuecoLibre() {
  for (var j = 0; j < WORK_HOURS.length; j++) {
    var allAvailable = true;
    var hour = WORK_HOURS[j];
    for (var i = 0; i < myTeam.length; i++) {
      if (!myTeam[i].availability[j]) {
        allAvailable = false;
        break;
      };
    }
    if (allAvailable) {
      console.log("Hueco encontrado en el horario", hour);
      return;
    }
  }
  console.log("Lo siento. No hay hueco disponible en el equipo.");
};

// Generar disponibilidad aleatoria. 

generarDisponibilidadAleatoria();

// Mostrar disponibilidad por consola.

mostrarDisponibilidad();

// Buscar hueco libre.

buscarHuecoLibre();

console.log("----------");

//* CALCULADORA DE CAMBIO ÓPTIMO DE BILLETES Y MONEDAS. 
//* Implementar una calculadora de cambio óptimo en base a un importe de compra y la cantidad entregada por el cliente.
//* Debemos permitir que el usuario introduzca una cantidad con el importe total de la compra 
//* y una cantidad con el dinero que nos entregan.
//* · Input numérico para el importe total.
//* · Input numérico para la cantidad que se entrega.
//* · Botón de calcular.
//* Al presionar el botón calcular, un algoritmo debe procesar los cálculos necesarios para que devuelva 
//* un resultado con el número de billetes y monedas necesarias para hacer la devolución.
//* Algoritmo. Dentro de nuestra tienda, podremos dar cambio de billetes de 5 €, 10 €, 20 €, 50 €, 100 € y 200 € 
//* (no daremos cambio de 500 €). Asímismo, tendremos monedas de 1, 2, 5, 10, 20 y 50 céntimos; y 1 y 2 euros.

function calcularCambio() {
  var importeTotal = parseFloat(document.getElementById("importeTotal").value);
  var cantidadEntregada = parseFloat(document.getElementById("cantidadEntregada").value);

  var cambio = cantidadEntregada - importeTotal; // Calculamos la diferencia.
  var resultado = {}; // Objeto para almacenar el resultado del cambio.

  // Array de billetes y monedas ordenado de mayor a menor valor.
  var billetesMonedas = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

  // Iteramos sobre los billetes y monedas disponibles.
  for (var i = 0; i < billetesMonedas.length; i++) {
    var valor = billetesMonedas[i];

    // Si el valor es menor o igual al cambio.
    if (valor <= cambio) {
      var cantidad = Math.floor(cambio / valor); // Cantidad de billetes o monedas necesarias
      resultado[valor] = cantidad; // Guardamos la cantidad en el resultado del cambio
      cambio = cambio - valor * cantidad; // Restamos el valor del billete o moneda del cambio total
      cambio = cambio.toFixed(2); // Redondeamos a 2 decimales para evitar errores de precisión
    }
  }

  mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
  var resultadoLista = document.getElementById("resultadoLista");
  resultadoLista.innerHTML = ""; // Limpiamos el contenido anterior

  for (var valor in resultado) {
    var cantidad = resultado[valor];
    var item = document.createElement("li");
    item.innerHTML = cantidad + " x " + valor;
    resultadoLista.appendChild(item);
  }
};

//* CHALLENGE. 
//* Vamos a complicar nuestro problema. Ahora debemos hacer el cálculo según los billetes y monedas 
//* que tengamos en nuestra caja.
//* Para ello necesitaremos de alguna forma, indicar qué cantidad de billetes y/o moneda tenemos disponibles.

// Obtener el importe total y la cantidad entregada desde los inputs
function calcular() {
  var importeTotal = parseFloat(document.getElementById("importe").value);
  var cantidadEntregada = parseFloat(document.getElementById("entregado").value);

  // Definir la caja con la cantidad de billetes y monedas disponibles
  var caja = {
    billetes200: 10,
    billetes100: 20,
    billetes50: 30,
    billetes20: 50,
    billetes10: 100,
    billetes5: 200,
    monedas2: 500,
    monedas1: 1000,
    monedas050: 2000,
    monedas020: 5000,
    monedas010: 10000,
    monedas005: 20000,
    monedas002: 50000,
    monedas001: 100000
  };

  // Calcular el cambio utilizando la función calcularCambioChallenge
  var resultado = calcularCambioChallenge(importeTotal, cantidadEntregada, caja);

  // Mostrar el resultado en la página
  var resultadoDiv = document.getElementById("resultado2");
  resultadoDiv.innerHTML = "";

  // Iterar sobre el resultado y mostrar cada moneda con la cantidad correspondiente
  for (var moneda in resultado) {
    var cantidad = resultado[moneda];
    resultadoDiv.innerHTML += moneda + ": " + cantidad + "<br>";
  }
}

// Calcular el cambio según los billetes y monedas disponibles
function calcularCambioChallenge(importeTotal, cantidadEntregada, caja) {
  // Calcular la diferencia entre la cantidad entregada y el importe total
  var cambio = cantidadEntregada - importeTotal;

  // Objeto para almacenar el resultado del cambio
  var resultado = {};

  // Array de billetes y monedas ordenado de mayor a menor valor
  var billetesMonedas = [
    { valor: 200, nombre: "billetes200" },
    { valor: 100, nombre: "billetes100" },
    { valor: 50, nombre: "billetes50" },
    { valor: 20, nombre: "billetes20" },
    { valor: 10, nombre: "billetes10" },
    { valor: 5, nombre: "billetes5" },
    { valor: 2, nombre: "monedas2" },
    { valor: 1, nombre: "monedas1" },
    { valor: 0.5, nombre: "monedas050" },
    { valor: 0.2, nombre: "monedas020" },
    { valor: 0.1, nombre: "monedas010" },
    { valor: 0.05, nombre: "monedas005" },
    { valor: 0.02, nombre: "monedas002" },
    { valor: 0.01, nombre: "monedas001" }
  ];

  // Iterar sobre los billetes y monedas disponibles
  for (var i = 0; i < billetesMonedas.length; i++) {
    var billeteMoneda = billetesMonedas[i];
    var valor = billeteMoneda.valor;
    var nombre = billeteMoneda.nombre;

    // Si el valor es menor o igual al cambio y hay disponible en la caja
    if (valor <= cambio && caja[nombre] > 0) {
      // Calcular la cantidad de billetes o monedas necesarias
      var cantidad = Math.floor(cambio / valor);

      // Si la cantidad necesaria es mayor a la cantidad disponible en la caja, utilizar la cantidad disponible
      if (cantidad > caja[nombre]) {
        cantidad = caja[nombre];
      }

      // Guardar la cantidad en el resultado del cambio
      resultado[nombre] = cantidad;

      // Restar el valor del cambio total y la cantidad disponible en la caja
      cambio -= valor * cantidad;
      caja[nombre] -= cantidad;
      cambio = cambio.toFixed(2); // Redondeamos a 2 decimales para evitar errores de precisión

    }
  }

  // Devolver el resultado del cambio
  return resultado;
}
