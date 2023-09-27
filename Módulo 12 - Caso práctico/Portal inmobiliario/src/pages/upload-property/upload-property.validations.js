import {
    Validators,
    createFormValidation,
} from '@lemoncode/fonk';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { isUrl } from '@lemoncode/fonk-is-url-validator';

const validationSchema = {
    field: {
        title: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        notes: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        email: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.email,
                message: 'E-mail no válido',
            },
        ],
        phone: [
            {
                validator: Validators.required,
                message: 'Teléfono requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^(6|7|8|9)\d{8}$/ },
                message: 'Teléfono no válido',
            },
        ],
        price: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: positiveNumber.validator,
                message: 'Introduce un número correcto',
            },
        ],
        address: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        city: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        province: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        squareMeter: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: positiveNumber.validator, 
                message: 'Introduce un número correcto',
            },
        ],
        rooms: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: positiveNumber.validator, 
                message: 'Introduce un número correcto',
            },
        ],
        bathrooms: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: positiveNumber.validator, 
                message: 'Introduce un número correcto',
            },
        ],
        locationUrl: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: isUrl.validator,
                message: 'URL no válida',
            },
        ],
        mainFeatures: [
            {
                validator: arrayRequired.validator,
                message: 'Campo requerido',
                customArgs: { minLength: 1 },
            },
        ],
        equipments: [
            {
                validator: arrayRequired.validator,
                message: 'Campo requerido',
                // customArgs: { minLength: 1 },
            },
        ],
        images: [
            {
                validator: arrayRequired.validator,
                message: 'Campo requerido',
                customArgs: { minLength: 1 },
            },
        ],
        saleTypes: [
            {
                validator: arrayRequired.validator,
                message: 'Campo requerido',
            },
        ],
    },
};

export const formValidation = createFormValidation(validationSchema);


    // title: '',
    // notes: '',
    // email: '',
    // phone: '',
    // price: '',
    // saleTypes: [],
    // address: '',
    // city: '',
    // province: '',
    // squareMeter: '',
    // rooms: '',
    // bathrooms: '',
    // locationUrl: '',
    // mainFeatures: '',
    // equipments: '', 
    // images: '',
