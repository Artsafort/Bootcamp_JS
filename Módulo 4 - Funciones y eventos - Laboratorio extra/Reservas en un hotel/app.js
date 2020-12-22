//Room types
//La función comprueba el tipo de habitación y devuelve el precio asignado a ese tipo. 
//Entrada: 
//Salida: precio del tipo de habitación. 
function precioPorTipoHabitacion () {
    var type = document.getElementById("room-type").value;
    var precio;
        switch(type){
            case "standard":
                precio = 100; break;

            case "junior-suite":
                precio = 120; break;

            case "suite":
                precio = 150; break;

            default:
                precio = "por favor selecciona"; break;
            
            } 
            return precio

        }

// ROOM SIZE
// La función recalcula el precio asignado al tipo de habitación incrementando o decrementando según el tipo de ocupación. 
// Entrada: precio-es una cifra a la que se incremente/decrementa el valor dependiendo de la ocupación.
// Salida: precio recalculado. 

function recalcularPrecioPorOcupacion (precio) {

    var ocupation = document.getElementById("room-size").value;
    var precioRecalculado;

switch (ocupation){

    case "individual":
        
        precioRecalculado = precio - (precio * 0.25); break;
    case "triple":
        precioRecalculado = precio + (precio * 0.25); break;
    case "doble":
        precioRecalculado = precio; break;
    default:
        precioRecalculado = precio; break;

    }
    return precioRecalculado;
}

// NIGHTS
// La función multiplica el precio por el número de noches. 
// Entrada: precio. 
// Salida: result-precio multiplicado por el número de noches. 

function multiplicarPorNumeroDeNoches (precio) {

    var nights = document.getElementById("nights").value;
    var result; 
    if (nights <= 0 ){
        alert ("seleccione 1 o más noches, por favor");
    }
    else result = precio * nights;
    return result;
}
 // PARKING
 // La función añade precio de parking por noches al precio de entrada. 
 // Entrada: precio. 
 // Salida: sumatorio de precio más el número de noches de parking por 10.

function añadirPrecioDeParking (precio) {
    var result;
    var parking = document.getElementById("parking").value;
    if (isNaN(parking)){
        alert ("Seleccione un número");
        } else {
            result = parking*10 + precio;
        }
          return result;
    }

// SPA 
// La función de Spa añade el precio total de las noches de Spa con el incremento/decremento aplicado según ocupación. 
// Entrada: precio.
// Salida: result-sumatorio del precio de entrada más el precio total de Spa con el incremento/decremento aplicado. 

function añadirPrecioDeSpa (precio) {
    var spa = document.getElementById("spa").checked;

    var result;
// If the checkbox is checked, display the output text
        if (spa == true) {
            var nights = document.getElementById("nights").value;
            result =  recalcularPrecioPorOcupacion(nights*20) + precio;
        } else {
            text.style.display = "SPA no incluido";
        }
        return result + "€";
    }

    // Las operaciones de multiplicación y suma finales se reflejan aquí. 
    // La función devuelve el precio total a pagar por el cliente. 

    function showResult () {
       
        var precio = precioPorTipoHabitacion (); 

        console.log("Valor de precio", precio);

        precio = recalcularPrecioPorOcupacion (precio);

        console.log("Valor de ocupación", precio);

        precio = multiplicarPorNumeroDeNoches (precio);

        console.log("Valor de noches", precio);

        precio = añadirPrecioDeParking(precio);

        console.log(precio);        

        precio = añadirPrecioDeSpa(precio);

        console.log(precio);
     
        document.getElementById("result").innerHTML = precio;
    }

    document.getElementById("calculate").addEventListener("click", showResult);