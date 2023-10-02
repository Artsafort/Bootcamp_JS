import {
    onAddFile,
    onSubmitForm,
    onUpdateField,
} from "../../common/helpers";
import {
    getSaleTypeList,
    getProvinceList,
    getEquipmentList,
    insertProperty,
} from "./upload-property.api.js";
import {
    onSetError,
    onSetFormErrors,
} from "../../common/helpers";
import { history } from '../../core/router/history';
import {
    formatDeleteFeatureButtonId,
    onAddFeature,
    onAddImage,
    setCheckboxList,
    formatCheckboxId,
    setOptionList,
    onRemoveFeature,
} from "./upload-property.helpers.js";
import { mapPropertyListFromViewModelToApi } from "./upload-property.mappers";
import { formValidation } from "./upload-property.validations.js";

console.log("upload property page");

// DATOS GENERALES:

let newProperty = {
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypes: [],
    address: '',
    city: '',
    province: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: [],
    equipments: [],
    images: [],
};


const addElement = (value, id) => {
    // if (id === 'saleTypes') {
    //     newProperty.saleTypes = [...newProperty.saleTypes, value];
    // } else if (id === 'equipments') {
    //     if (!Array.isArray(newProperty.equipments)) {
    //         newProperty.equipments = [];
    //     }
    //     newProperty.equipments = [...newProperty.equipments, value];
    //     return newProperty;
    // };
    newProperty[ id ] = [...newProperty[ id ], value];
    return newProperty;
};

const removeElement = (value, id) => {
    if (id === 'saleTypes') {
        newProperty.saleTypes = [...newProperty.saleTypes.filter(item => item !== value)];
    } else if (id === 'equipments') {
        if (!Array.isArray(newProperty.equipments)) {
            newProperty.equipments = [];
        }
        newProperty.equipments = [...newProperty.equipments.filter(item => item !== value)];
        return newProperty;
    }
    // if (id === 'saleTypes') {
    //     newProperty.saleTypes = [...newProperty.saleTypes.filter(item => item !== value)];
    // } else if (id === 'equipments') {
    //     if (!Array.isArray(newProperty.equipments)) {
    //         newProperty.equipments = [];
    //     }

    // newProperty[ id ] = [...newProperty[ id ].filter(item => item !== value), value];
    // return newProperty;
};


// const setEvents = (list, ID) => {
//     list.forEach(el => {
//         const id = formatCheckboxId(el);
//         onUpdateField(id, event => {
//             const value = event.target.value;
//             if (event.target.checked === true) {
//                 addElement(value, ID);
//             } else {
//                 removeElement(value, ID);
//             };
//         });
//     });
// };

// ------- PROMESAS -------- 

Promise.all([getSaleTypeList(), getProvinceList(), getEquipmentList()]).then(
    ([saleTypeList, provinceList, equipmentList]) => {
        setCheckboxList(saleTypeList, 'saleTypes');
        console.log(saleTypeList);
        setCheckboxList(equipmentList, 'equipments');
        console.log(equipmentList);
        // setEvents(saleTypeList, 'saleTypes');
        // setEvents(equipmentList, 'equipments');
        setOptionList(provinceList, 'province');
    }
);

// DATOS GENERALES:

onUpdateField('title', (event) => {
    const value = event.target.value;
    newProperty.title = value;

    formValidation.validateField('title', newProperty.title).then(result => {
        onSetError('title', result);
    });
});

onUpdateField('email', (event) => {
    const value = event.target.value;
    newProperty.email = value;

    formValidation.validateField('email', newProperty.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('notes', (event) => {
    const value = event.target.value;
    newProperty.notes = value;

    formValidation.validateField('notes', newProperty.notes).then(result => {
        onSetError('notes', result);
    });

});

onUpdateField('rooms', (event) => {
    const value = event.target.value;
    newProperty.rooms = value;

    formValidation.validateField('rooms', newProperty.rooms).then(result => {
        onSetError('rooms', result);
    });

});

onUpdateField('bathrooms', (event) => {
    const value = event.target.value;
    newProperty.bathrooms = value;

    formValidation.validateField('bathrooms', newProperty.bathrooms).then(result => {
        onSetError('bathrooms', result);
    });

});

onUpdateField('squareMeter', (event) => {
    const value = event.target.value;
    newProperty.squareMeter = value;

    formValidation.validateField('squareMeter', newProperty.squareMeter).then(result => {
        onSetError('squareMeter', result);
    });

});

onUpdateField('price', (event) => {
    const value = event.target.value;
    newProperty.price = value;

    formValidation.validateField('price', newProperty.price).then(result => {
        onSetError('price', result);
    });
});

onUpdateField('phone', (event) => {
    const value = event.target.value;
    newProperty.phone = value;

    formValidation.validateField('phone', newProperty.phone).then(result => {
        onSetError('phone', result);
    });
});

onUpdateField('saleTypes', event => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
        addElement(value, 'saleTypes');
    } else {
        removeElement(value, 'saleTypes');
    }
    formValidation.validateField('saleTypes', newProperty.saleTypes).then(result => {
        onSetError('saleTypes', result);
    });
});

// DATOS DE LA VIVIENDA:

onUpdateField('address', (event) => {
    const value = event.target.value;
    newProperty.address = value;

    formValidation.validateField('address', newProperty.address).then(result => {
        onSetError('address', result);
    });
});

onUpdateField('city', (event) => {
    const value = event.target.value;
    newProperty.city = value;

    formValidation.validateField('city', newProperty.city).then(result => {
        onSetError('city', result);
    });
});

onUpdateField('province', (event) => {
    const value = event.target.value;
    newProperty.province = value;

    formValidation.validateField('province', newProperty.province).then(result => {
        onSetError('province', result);
    });
});

onUpdateField('locationUrl', (event) => {
    const value = event.target.value;
    newProperty.locationUrl = value;

    formValidation.validateField('locationUrl', newProperty.locationUrl).then(result => {
        onSetError('locationUrl', result);
    });
});

onUpdateField('mainFeatures', (event) => {
    const value = event.target.value;
    newProperty.mainFeatures = value;

    formValidation.validateField('mainFeatures', newProperty.mainFeatures).then(result => {
        onSetError('mainFeatures', result);
    });
});

onUpdateField('equipments', (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    
        if (isChecked) {
            addElement(value, 'equipments'); // Agrega el valor al array
        } else {
            removeElement(value, 'equipments'); // Elimina el valor del array
        }
    
        // Realiza la validación y maneja la respuesta
        formValidation.validateField('equipments', newProperty.equipments).then(result => {
            onSetError('equipments', result);
        });
    });
    

onUpdateField('images', (event) => {
    const value = event.target.value;
    newProperty.images = value;

    formValidation.validateField('images', newProperty.images).then(result => {
        onSetError('images', result);
    });
});

onSubmitForm('insert-feature-button', () => {
    const value = document.getElementById('newFeature').value;
    if (value) {
        // 1. Obtén el ID del botón de eliminación basado en el valor de la característica.
        const deleteId = formatDeleteFeatureButtonId(value);

        // 2. Agrega la característica al objeto newProperty.
        newProperty = addElement(value, 'mainFeatures');

        // 3. Agrega la característica a la interfaz de usuario.
        onAddFeature(value);

        // 4. Establece un manejador para el botón de eliminación.
        onSubmitForm(deleteId, () => {
            // 5. Elimina la característica del objeto newProperty.
            newProperty = removeElement(value, 'mainFeatures');

            // 6. Elimina la característica de la interfaz de usuario.
            onRemoveFeature(value);
        });
    }
});


onAddFile('add-image', value => {
    onAddImage(value);
    addElement(value, 'add-image');
});

// GUARDAR EL FORMULARIO:

onSubmitForm('save-button', () => {
    // 1. Valida el formulario utilizando formValidation.
    formValidation.validateForm(newProperty).then(result => {
        // 2. Establece los errores del formulario en la interfaz de usuario.
        onSetFormErrors(result);

        // 3. Convierte el objeto newProperty en un formato adecuado para la API.
        const apiNewProperty = mapPropertyListFromViewModelToApi(newProperty);

        // 4. Muestra información de depuración en la consola.
        console.log(newProperty);
        console.log(apiNewProperty);

        // 5. Si la validación del formulario es exitosa.
        if (result.succeeded) {
            // 6. Inserta la propiedad utilizando la función insertProperty de la API.
            insertProperty(apiNewProperty).then(() => {
                // 7. Navega hacia atrás en la historia del navegador.
                // history.back();
            });
        }
    });
});

