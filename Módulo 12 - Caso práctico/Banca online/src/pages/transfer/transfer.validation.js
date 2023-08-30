import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';
import { dayValidator, monthValidator, yearValidator } from './transfer.custom.validation';

const validationSchema = {
    field: {
        iban: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: iban.validator,
                message: 'Iban no válido',
            }
        ],
        name: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            }
        ],
        amount: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            },
            {
                validator: positiveNumber.validator,
                message: 'Introduce un número correcto'
            }
        ],
        concept: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            }
        ],
        day: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: dayValidator,
            },
        ],
        month: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: monthValidator,
            }
        ],
        year: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: yearValidator,
            }
        ],
        date: [
            {
                validator: laterDate.validator,
                customArgs: { parseStringToDateFn: value => new Date(value), date: new Date() },
                message: 'La fecha no es correcta',
            },,
        ],
        email: [
            {
                validator:Validators.email,
                message: 'Email no válido',
            },
        ],
    }
};

export const formValidation = createFormValidation(validationSchema);

