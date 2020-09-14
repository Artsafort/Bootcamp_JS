// Calcular precio total 

const product = {count: 3, price: 12.55, type: "ropa" };

let total;

if (product.count <= 0){

    total = product.count * product.price;
}

else{
    total = 0
};

if (total => 0){

    total = product.count * product.price }; 

console.log("Total IVA no incluido: ", total);

// Calcular el IVA

let tipoIVA;

switch(product.type){

    case "alimentación":
        tipoIVA = 0.10;
        break;
      
    case "libro": 
        tipoIVA = 0.04;
        break;
    default: tipoIVA = 0.21;

}

console.log("Tipo de IVA: ", tipoIVA);

const IVA = total * tipoIVA;

console.log("IVA: ", IVA);

let precioconIVA = total + IVA;

console.log("Precio con IVA incluido: ", precioconIVA);

// Calcular sueldo neto en nómina

// Las condiciones:
// Por rango de salario:
// Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
// Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
// Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
// Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%
// Adicionalmente:
// Si el empleado tiene hijos, restarle a la retencion 2 puntos.

const empleado = {

    bruto: 14500,
    hijos: 2,
    pagas: 14,

}

// Retenciones

let retención; 

const witholding ={

    Menosde12000: 0,
    Menosde24000: 0.08,
    Menosde34000: 0.16,
    Másde34000: 0.30,
}

if (empleado.bruto<12000){
    retención = witholding.Menosde12000;
}
else if (empleado.bruto<24000){
    retención = witholding.Menosde24000;
}
else if (empleado.bruto<34000){
    retención = witholding.Menosde34000;
}
else if (empleado.bruto>34000){
    retención = witholding.Másde34000;
}

console.log("Tipos de retención: ", witholding);

console.log("Tipo de retención seleccionada: ", retención);

if (empleado.hijos > 0){

    totalRetención = retención - 0.02;
}

console.log("Total de retención: ", (totalRetención = empleado.bruto * retención) + " €");

console.log("Sueldo anual bruto menos retenciones", (neto = empleado.bruto - totalRetención) + " €");

// Siguiente paso, sacar el neto mensual (si es catorce pagas dividir por catorce, si no por 12)

console.log("Sueldo neto en 14 pagas", neto/empleado.pagas);