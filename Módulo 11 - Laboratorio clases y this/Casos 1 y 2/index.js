// CASO 1:
console.log("Caso 1: cliente particular.");
class BookingsManager {
    constructor(reservas) {
      this.reservas = reservas;
      this.standardPricePerNight = 100;
      this.suitePricePerNight = 150;
      this.additionalPersonChargePerNight = 40;
      this.ivaRate = 0.21;
    }
  
    calculateSubtotal() {
      let subtotal = 0;
      this.reservas.forEach((reserva) => {
        if (reserva.tipoHabitacion === "standard") {
          subtotal += this.standardPricePerNight * reserva.noches;
        } else if (reserva.tipoHabitacion === "suite") {
          subtotal += this.suitePricePerNight * reserva.noches;
        }
  
        subtotal += this.additionalPersonChargePerNight * (reserva.pax - 1) * reserva.noches;
      });
  
      return subtotal;
    }
  
    calculateTotal() {
      const subtotal = this.calculateSubtotal();
      const ivaAmount = subtotal * this.ivaRate;
      const total = subtotal + ivaAmount;
      return total;
    }
  }
  
  const reservas = [
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 3,
    },
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 4,
    },
    {
      tipoHabitacion: "suite",
      pax: 2,
      noches: 1,
    },
  ];
  
  const bookingsManager = new BookingsManager(reservas);
  const subtotal = bookingsManager.calculateSubtotal();
  const total = bookingsManager.calculateTotal();
  
  console.log("Subtotal:", subtotal);
  console.log("Total:", total);
  
  // CASO 2:

console.log("Caso 2: Tour-operador.");

  class TourOperadorReservasManager extends BookingsManager {
    constructor(reservas) {
      super(reservas);
      this.standardPricePerNight = 100;
      this.discountRate = 0.15;
    }
  
    calculateSubtotal() {
      let subtotal = super.calculateSubtotal();
      subtotal *= 1 - this.discountRate; // Aplicar el descuento al subtotal
      return subtotal;
    }
  }
  
  const tourOperadorReservasManager = new TourOperadorReservasManager(reservas);
  const subtotalTourOperador = tourOperadorReservasManager.calculateSubtotal();
  const totalTourOperador = tourOperadorReservasManager.calculateTotal();
  
  console.log("Subtotal:", subtotalTourOperador);
  console.log("Total:", totalTourOperador);
  
  