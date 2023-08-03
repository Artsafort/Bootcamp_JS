class BookingsManager {
  constructor(reservas, pricesList) {
    this._reservas = reservas;
    this._pricesList = pricesList;
  }

  calculateSubtotal() {
    // Aquí se implementa el cálculo del subtotal usando this._reservas y this._pricesList.
    // Y, se retorna el subtotal.
  }

  get subtotal() {
    return this.calculateSubtotal();
  }

  get total() {
    const iva = 0.21;
    return this.subtotal * (1 + iva);
  }
}

class ClienteParticularBookingsManager extends BookingsManager {
  constructor(reservas, pricesList, additionalChargePerPax, breakfastChargePerPax) {
    super(reservas, pricesList);
    this._additionalChargePerPax = additionalChargePerPax;
    this._breakfastChargePerPax = breakfastChargePerPax;
  }

  calculateSubtotal() {
      // Aquí se implementa el cálculo del subtotal específico para el cliente particular.
      // Se utilizan this._reservas y this._pricesList para obtener los datos necesarios.
      // Y, se retorna el subtotal específico para el cliente particular.
    return this._reservas.reduce((subtotal, reserva) => {
      const { tipoHabitacion, desayuno, pax, noches } = reserva;
      const pricePerNight = this._pricesList[tipoHabitacion];
      subtotal += pricePerNight * noches;
      subtotal += this._additionalChargePerPax * (pax - 1) * noches;

      if (desayuno) {
        subtotal += this._breakfastChargePerPax * pax * noches;
      }

      return subtotal;
    }, 0);
  }
}

class TourOperatorBookingsManager extends BookingsManager {
  constructor(reservas, pricesList, discount, breakfastChargePerPax) {
    super(reservas, pricesList);
    this._discount = discount;
    this._breakfastChargePerPax = breakfastChargePerPax;
  }

  calculateSubtotal() {
       // Se implementa el cálculo del subtotal específico para el tour operador aquí.
       // Se utilizan this._reservas y this._pricesList para obtener los datos necesarios.
       // Y, se retorna el subtotal específico para el tour operador.
    return this._reservas.reduce((subtotal, reserva) => {
      const { tipoHabitacion, desayuno, noches } = reserva;
      const pricePerNight = this._pricesList[tipoHabitacion];
      subtotal += pricePerNight * noches;

      if (desayuno) {
        subtotal += this._breakfastChargePerPax * reserva.pax * noches;
      }

      return subtotal;
    }, 0);
  }
}

// Descripción de tipos de habitación, desayuno, personas, noches, precios y descuento: 

const reservas = [
  { tipoHabitacion: "standard", desayuno: false, pax: 1, noches: 3 },
  { tipoHabitacion: "standard", desayuno: false, pax: 1, noches: 4 },
  { tipoHabitacion: "suite", desayuno: true, pax: 2, noches: 1 },
];

const pricesList = {
  standard: 100,
  suite: 150,
};

const additionalChargePerPax = 40;
const breakfastChargePerPax = 15;
const discount = 0.15;

const clienteParticularBookingsManager = new ClienteParticularBookingsManager(
  reservas,
  pricesList,
  additionalChargePerPax,
  breakfastChargePerPax
);
const tourOperatorBookingsManager = new TourOperatorBookingsManager(reservas, pricesList, discount, breakfastChargePerPax);

console.log("- CLIENTE PARTICULAR: ");
console.log("Subtotal Cliente Particular:", clienteParticularBookingsManager.subtotal);
console.log("Total Cliente Particular:", clienteParticularBookingsManager.total);

console.log("- TOUR OPERADOR: ");
console.log("Subtotal Tour Operador:", tourOperatorBookingsManager.subtotal);
console.log("Total Tour Operador:", tourOperatorBookingsManager.total);