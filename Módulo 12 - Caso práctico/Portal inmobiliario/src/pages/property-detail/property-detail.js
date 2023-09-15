import { getPropertyDetail, getEquipmentList, isValidContact } from "./property-detail.api";
import { mapPropertyListFromApiToViewModel } from "../property-detail/property-detail.mappers";
import { history, routes } from '../../core/router/history';
import { setPropertyValues } from './property-detail.helpers';
import { setErrorMessage, onSetValues, onSubmitForm, onUpdateField } from "../../common/helpers";
import { formValidation, createFormValidation } from "./property-detail.validations";


let submitForm = {
    email: '',
    message: '',
};

const params = history.getParams();
const isId = Boolean(params.id);

if (isId) {
    Promise.all( [
        getPropertyDetail(params.id),
        getEquipmentList(),
    ]).then(([apiPropertyDet, equipmentList]) => {
        const propertySeenDetail = mapPropertyListFromApiToViewModel(apiPropertyDet, equipmentList);
        setPropertyValues(propertySeenDetail); 
    });
};

console.log("property detail page");
console.log(params.id);

onUpdateField('email', event => {
    const value = event.target.value;
    submitForm = {
        ...submitForm,
        email: value,
    };
    formValidation.validateField('email', submitForm.email).then(result => {
        isValidContact('email', result);
    });
});

onUpdateField('message', event => {
    const value = event.target.value;
    submitForm = {
        ...submitForm,
        message: value,
    };
    formValidation.validateField('message', submitForm.message).then(result => {
        isValidContact('message', result);
    });
});

// const onNavigate = isValid => {
//     if(isValid) {
//         history.push(routes.equipmentList);
//     } else {
//         alert('E-mail y/o mensaje no válidos');
//     }
// };


onSubmitForm('contact-button', () => {
createFormValidation.validateForm(submitForm).then(result => {
    setErrorMessage(result);
    console.log(result);
    if (result.succeeded) {
        savedData(newProperty).then(isValid => {
            console.log({ isValid });
            onNavigate(isValid);
        });
      };
    });
});

