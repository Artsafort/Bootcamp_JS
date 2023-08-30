export const dayValidator = ({ value }) => {
    const intValue = parseInt(value);
    const succeeded = intValue >= 1 && intValue <= 31;

    return {
        succeeded,
        message: succeeded
            ? ''
            : 'Introduce un número válido para el día (entre 1 y 31)',
        type: '',
    };
};

export const monthValidator = ({ value }) => {
    const intValue = parseInt(value);
    const succeeded = intValue >= 1 && intValue <= 12;

    return {
        succeeded,
        message: succeeded
            ? ''
            : 'Introduce un número válido para el mes (entre 1 y 12)',
        type: '',
    };
};

export const yearValidator = ({ value }) => {
    const intValue = parseInt(value);
    const currentYear = new Date().getFullYear();
    const succeeded = intValue >= currentYear;

    return {
        succeeded,
        message: succeeded
            ? ''
            : 'Introduce un número válido para el año (igual o mayor al año actual)',
        type: '',
    };
};

