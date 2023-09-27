import { getPropertyDetail, getEquipmentList, savedData } from "./property-detail.api";
import { mapPropertyListFromApiToViewModel } from "../property-detail/property-detail.mappers";
import { history } from '../../core/router/history';
import { setPropertyValues } from './property-detail.helpers';
import { onSubmitForm, onUpdateField, onSetError, onSetFormErrors } from "../../common/helpers";
import { formValidation } from "./property-detail.validations";


let form = {
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
    form = {
        ...form,
        email: value,
    };
    formValidation.validateField('email', form.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('message', event => {
    const value = event.target.value;
    form = {
        ...form,
        message: value,
    };
    formValidation.validateField('message', form.message).then(result => {
        onSetError('message', result);
    });
});

onSubmitForm('contact-button', () => {
formValidation.validateForm(form).then(result => {
    onSetFormErrors(result);
    console.log(result);
    if (result.succeeded) {
        savedData(form).then(isValid => {
            console.log({ isValid });
        });
      };
    });
});

