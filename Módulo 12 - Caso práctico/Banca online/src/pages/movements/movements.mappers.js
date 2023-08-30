// Función para mapear una lista de movimientos de la API a un modelo visual:

export const mapMovementsListApiToVisualModel = movementsList => {

// Utilizamos el método `map` para aplicar la función `mapMovementsApiToVisualModel` a cada movimiento
// en la lista de movimientos y crear un nuevo array con los resultados mapeados.

    return movementsList.map(movement => mapMovementsApiToVisualModel(movement));
};

// Función para mapear un movimiento de la API a un modelo visual.

const mapMovementsApiToVisualModel = movement => {

    // Creamos y devolvemos un objeto con campos mapeados desde el objeto 'movement' de la API
    // Se formatean las fechas utilizando el método 'toLocaleDateString'.

    return {
        transaction: new Date(movement.transaction).toLocaleDateString(),
        realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
        description: movement.description,
        amount: `${movement.amount} €`, // Se realiza la interpolación y agregamos el símbolo de euro al importe.
        balance: `${movement.balance} €`, // Se realiza la interpolación y agregamos el símbolo de euro al saldo.
    };
};

// Función para mapear una cuenta de la API a un modelo visual:

export const mapAccountApiToVisualModel = account => {
// Creamos y devolvemos un objeto con campos mapeados desde el objeto 'account' de la API.
// Se hace la interpolación de la propiedad balance y utilizamos el símbolo de euro para el campo de saldo.
    return {
        balance: `${account.balance} €`,
        iban: account.iban,
        alias: account.name,
    };
};
