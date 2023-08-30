// Importación de funciones y módulos necesarios desde otros archivos:

import { getMovements, getAccounts } from './movements.api'; 
import { addMovementRows } from './movements.helpers'; 
import { mapMovementsListApiToVisualModel, mapAccountApiToVisualModel } from './movements.mappers'; 
import { history } from '../../core/router/history';
import { onSetValues } from '../../common/helpers';

// Obtenemos los parámetros de la URL actual utilizando la función 'getParams' del módulo 'history':

const params = history.getParams();

// Verificamos si hay un parámetro 'id' en los parámetros de la URL, lo que indica que estamos en modo de edición.
const isEditMode = Boolean(params.id);

// Obtenemos el ID de la cuenta desde los parámetros:

const accountId = params.id;

// Si estamos en modo de edición:

if (isEditMode) {
 
    // Obtenemos la información de la cuenta utilizando el ID:
    getAccounts(accountId).then(accountList => {  
    // Mapeamos la respuesta de la API a un formato visual utilizando 'mapAccountApiToVisualModel'.
        const accounts = mapAccountApiToVisualModel(accountList);
    // Actualizamos la página con la información de la cuenta utilizando 'onSetValues'
        onSetValues(accounts);
    });
    // Obtenemos los movimientos asociados a la cuenta y los adaptamos a un nuevo formato 
    // utilizando 'getMovements' y 'mapMovementsListApiToVisualModel'.
    getMovements(accountId).then(movementList =>{
    // Mapeamos la respuesta de la API a un formato visual utilizando 'mapMovementsListApiToVisualModel'.
        const movements = mapMovementsListApiToVisualModel(movementList);
    // Agregamos las filas de movimientos a la página utilizando 'addMovementRows':
        addMovementRows(movements);
    // Mostramos los movimientos en la consola
        console.log(movements);
    });

// Si no estamos en modo de edición:

} else {
    
// Obtenemos todos los movimientos utilizando 'getMovements' y los adaptamos utilizando 'mapMovementsListApiToVisualModel':
    getMovements().then(movementList =>{
        // Mapeamos la respuesta de la API a un formato visual utilizando 'mapMovementsListApiToVisualModel'.
        const movements = mapMovementsListApiToVisualModel(movementList);
        // Agregamos las filas de movimientos a la página utilizando 'addMovementRows'.
        addMovementRows(movements);
        // Mostramos los movimientos en la consola
        console.log(movements);
    });
};
