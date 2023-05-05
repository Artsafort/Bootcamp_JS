const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];

   // Listar todos los produuctos 

// let producto; 
// for (i = 0; i < carrito.length; i++) {
//    imprimir (carrito[i])
//    console.log("----------");
// }
//    function imprimir (producto) {
//        console.log("id:" + producto.id);
//        console.log("name:" + producto.name);
//        console.log("price:" + producto.price);
//        console.log("count:" + producto.count);
//        console.log("premium:" + producto.premium);
       
//    }
   
   //Eliminar el producto con id 54657 del carrito de la compra

// for (i = 0; i < carrito.length; i++){
//     if (carrito[i].id == 54657) {
//        indice = i;
//        carrito.splice(indice, 1); 
//     }
// }
// console.log(carrito);


   //Calcular el total del carrito de la compra (el coste de una línea es precio*cantidad)

//    let total = 0;

//   var carrito1 = {id: 198752,
//    name: "Tinta DJ27 Color",
//    price: 52.95,
//    count: 3,
//    premium: true};

//    var carrito2 = {id: 75621,
//    name: "Impresora ticketera PRO-201",
//    price: 32.75,
//    count: 2,
//    premium: true};
   
//    var carrito3 = {id: 54657,
//    name: "Caja de rollos de papel para ticketera",
//    price: 5.95,
//    count: 3,
//    premium: false};

//    var carrito4 = {id: 3143,
//    name: "Caja de folios DIN-A4 80gr",
//    price: 9.95,
//    count: 2,
//    premium: false};

//    const carritos = [carrito1, carrito2, carrito3, carrito4];

//    for (i = 0; i < carritos.length; i++) {

//       total += carritos[i].price * carritos[i].count;
   // }
   // for (i = 0; i < carrito.length; i++) {
   //    total == carrito[i].price * carrito[i].count;
   //    console.log("*************");
   //    console.log(carrito[i].name);
   //    console.log("-----");
   // }

   // console.log("Total del carrito: ", total);


   // Filtrar por los productos que sean prime

   // let prime_list = [];

   // let primeProduct;

   // for (i = 0; i < carrito.length; i++) {
   //    if (carrito[i].premium == true) {
   //       primeProduct;
   //       prime_list.push(carrito[i]);
   //    }
   // }

   // console.log(prime_list); 

   // OPCIONAL 
   //Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío"

   // let premium = true;
   // for (product of carrito) {
   //    if (product.premium === false) {
   //       premium = false;
   //    }
   // }
   // if (premium === true) {
   //    console.log("Pedido sin gastos de envío");
   // }
   // else {
   //    console.log("Este pedido tiene gastos de envío");
   // }
   //Mostrar el carrito en un listado de html básico

// document.write("<h3>Su carrito de la compra:</h3>");
// for (var product of carrito) {
//    document.write("<ul>");
//    document.write("<li>" + product.name + "</li>");
//    document.write("</ul>");
// }

   //Aplicar un descuento del 5% si la compra es mayor de 100€.

   // let total = 0;

   // let descuento = 0.95;
   //    if (total >= 100) {
   //       console.log("Se ha aplicado a su pedido un descuento del 5%")
   //             total = total*descuento;
   //          }

   // console.log("Total del carrito: ", total);
