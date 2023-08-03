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
  constructor(reservas, pricesList, additionalChargePerPax) {
    super(reservas, pricesList);
    this._additionalChargePerPax = additionalChargePerPax;
  }

  calculateSubtotal() {
      // Aquí se implementa el cálculo del subtotal específico para el cliente particular.
      // Se utilizan this._reservas y this._pricesList para obtener los datos necesarios.
      // Y, se retorna el subtotal específico para el cliente particular.
    return this._reservas.reduce((subtotal, reserva) => {
      const { tipoHabitacion, pax, noches } = reserva;
      const pricePerNight = this._pricesList[tipoHabitacion];
      subtotal += pricePerNight * noches + this._additionalChargePerPax * (pax - 1) * noches;
      return subtotal;
    }, 0);
  }
}

class TourOperatorBookingsManager extends BookingsManager {
  constructor(reservas, pricesList, discount) {
    super(reservas, pricesList);
    this._discount = discount;
  }

  calculateSubtotal() {
       // Se implementa el cálculo del subtotal específico para el tour operador aquí.
       // Se utilizan this._reservas y this._pricesList para obtener los datos necesarios.
       // Y, se retorna el subtotal específico para el tour operador.
    return this._reservas.reduce((subtotal, reserva) => {
      const { noches } = reserva;
      subtotal += this._pricesList.standard * noches;
      return subtotal;
    }, 0);
  }
}

  // Tipos de habitación y uso.

const reservas = [
  { tipoHabitacion: "standard", pax: 1, noches: 3 },
  { tipoHabitacion: "standard", pax: 1, noches: 4 },
  { tipoHabitacion: "suite", pax: 2, noches: 1 },
];

const pricesList = {
  standard: 100,
  suite: 150,
};

const additionalChargePerPax = 40;
const discount = 0.15;

const clienteParticularReservasManager = new ClienteParticularBookingsManager(reservas, pricesList, additionalChargePerPax);
const tourOperadorReservasManager = new TourOperatorBookingsManager(reservas, pricesList, discount);

console.log("- CLIENTE PARTICULAR: ");
console.log("Subtotal Cliente Particular:", clienteParticularReservasManager.subtotal);
console.log("Total Cliente Particular:", clienteParticularReservasManager.total);

console.log("- TOUR OPERADOR: ");
console.log("Subtotal Tour Operador:", tourOperadorReservasManager.subtotal);
console.log("Total Tour Operador:", tourOperadorReservasManager.total);
