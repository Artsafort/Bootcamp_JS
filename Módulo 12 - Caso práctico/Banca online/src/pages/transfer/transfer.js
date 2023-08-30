import { getAccounts, insertTransfer } from './transfer.api'; 
import { mapTransferVisualModelToApi } from './transfer.mappers'; 
import { setAccountOptions } from './transfer.helpers'; 
import { onSetFormErrors, onSubmitForm, onUpdateField, onSetError } from '../../common/helpers';
import { formValidation } from './transfer.validation';
import { history } from '../../core/router/history';

console.log('transfer page');

// Se define si la página está en modo de edición o no. 
const params = history.getParams();
const isEditMode = Boolean(params.id);

// Define el objeto con los campos y sus valores:
let transfer = {
    id: ' ',
    selectAccount: ' ', // Se agrega la propiedad sourceAccount para almacenar el ID
    // de la cuenta desde la cual se realizará la transferencia. 
    iban: ' ',
    name: ' ',
    amount: ' ',
    concept: ' ',
    notes: ' ',
    day: ' ',
    month: ' ',
    year: '',
    email: '',
};


// Si la página está en modo de edición, se obtiene la lista de cuentas y establece opciones
// en el selector "Selecciones cuenta de origen (IBAN)" con la cuenta seleccionada.

if (isEditMode) {
    getAccounts().then(accounts => {
        setAccountOptions(accounts, params.id);
        transfer = { ...transfer, selectAccount: params.id };
    });
} else {
  
    // Si no está en modo de edición, se obtiene la lista de cuentas y establece opciones
    // en el selector "Selecciones cuenta de origen (IBAN)" con la primera cuenta

    getAccounts().then(accounts => {
        accounts.forEach(account => {
            const option = getOption(account);
            select.appendChild(option);
        });
        transfer = { ...transfer, selectAccount: "1" };
    });
};
// Establece los manejadores de eventos para cuando el valor de los campos cambie.

onUpdateField('select-account', event => {
    const value = event.target.value;
    transfer = { ...transfer, selectAccount: value } 
});

onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = { ...transfer, iban: value };

    formValidation.validateField('iban', transfer.iban).then(result => {
        onSetError('iban', result);
    });
});

onUpdateField('name', event => {
    const value = event.target.value;
    transfer = { ...transfer, name: value};

    formValidation.validateField('name', transfer.name).then(result => {
        onSetError('name', result);
    })
});

onUpdateField('amount', event => {
    const value = event.target.value;
    transfer = { ...transfer, amount: value};

    formValidation.validateField('name', transfer.amount).then(result => {
        onSetError('amount', result)
    
    })
});

onUpdateField('concept', event => {
    const value = event.target.value;
    transfer = { ...transfer, concept: value};
});

onUpdateField('notes', event => {
    const value = event.target.value;
    transfer = { ...transfer, notes: value};
});

onUpdateField('day', event => {
    const value = event.target.value;
    transfer = { ...transfer, day: value, date: `${transfer.year}-${transfer.month}-${value}` };

    // Validation:
    formValidation.validateField('day', transfer.day).then(result => {
        onSetError('day', result);
    })
});

onUpdateField('month', event => {
    const value = event.target.value;
    transfer = { ...transfer, month: value, date: `${transfer.year}-${value}-${transfer.day}`};
    // Validation:
    formValidation.validateField('month', transfer.month).then(result => {
        onSetError('month', result);
    })
});

onUpdateField('year', event => {
    const value = event.target.value;
    transfer = { ...transfer, year: value, date: `${value}-${transfer.month}-${transfer.day}`};
    // Validation:
    formValidation.validateField('year', transfer.year).then(result => {
        onSetError('year', result);
    })
});

onUpdateField('email', event => {
    const value = event.target.value;
    transfer = { ...transfer, email: value};
    // Validation:
    formValidation.validateField('email', transfer.email).then(result => {
        onSetError('email', result);
    });
});
// Se establece el manejador de eventos para cuando se envíe el formulario.
onSubmitForm('transfer-button', () => {
    formValidation.validateForm(transfer).then(result => {
        onSetFormErrors(result);
        console.log(result); 
        console.log(transfer);

        const apiTransfer = mapAccountVisualModelToApi(transfer);
        console.log(apiTransfer);
        if (result.succeeded) {
            const apiTransfer = mapTransferVisualModelToApi(transfer); // Cambia a la función correspondiente
            insertTransfer(apiTransfer).then(() => { history.back() }); // Volver a la página anterior en el historial
            // del navegador. 
        }
    });
})

