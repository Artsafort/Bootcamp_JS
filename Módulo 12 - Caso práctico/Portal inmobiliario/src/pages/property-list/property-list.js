import { 
getPropertyList,
getSaleTypeList,
getProvinceList,
} from "./property-list.api";
import { mapPropertyListFromApiToViewModel , mapFilterToQueryParams } from "./property-list.mappers";
import { addPropertyRows, setOptions, clearPropertyRows } from './property-list.helpers';
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions } from "./property-list.constants";
import { onUpdateField, onSubmitForm } from '../../common/helpers';

console.log("property-list page");

// const [propertyList, saleTypeList, provinceList] = resultList;

Promise.all([getPropertyList(), getSaleTypeList(), getProvinceList(),]).then(
    ([propertyList, saleTypeList, provinceList]) => {
    loadPropertyList(propertyList);
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provinceList, 'select-province', '¿Dónde?');
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathroomOptions, 'select-bathroom', '¿cuartos de baño?');
    setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
    setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');
});

const loadPropertyList = propertyList => {
    const viewModelPropertyList = mapPropertyListFromApiToViewModel(propertyList);
    addPropertyRows(viewModelPropertyList);
};

/* 
Property {
    id: string;
    title: string;
    rooms: string; // 3 habitaciones (por eso es string)
    squareMeter: string; // 136 m2
    notes: string; // 240 truncar a caracteres, y añadir los '...'
    [truncar descripción: cortarla cuando llegue a X caracteres - acortarlo]
    price: string; // 120.000 €
    image: string; // 1º image base64
}
*/

let filter = {
    saleTypeId: '',
    provinceId: '',
    minRooms: '',
    minBathrooms: '',
    minPrice: '',
    maxPrice: '',
};

onUpdateField('select-sale-type', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        saleTypeId: value,
    };
});

onUpdateField('select-province', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        provinceId: value,
    };
});

onUpdateField('select-room', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        minRooms: value,
    };
});

onUpdateField('select-bathroom', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        minBathrooms: value,
    };
});

onUpdateField('select-min-price', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        minPrice: value,
    };
});

onUpdateField('select-max-price', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        maxPrice: value,
    };
});

onSubmitForm('search-button', () => {
    // `http://localhost:3000/api/properties?rooms_gte=${filter.minRooms}` filtrado por propiedades.
    const queryParams = mapFilterToQueryParams(filter);
    clearPropertyRows();
    
    getPropertyList(queryParams).then(propertyList => {
        loadPropertyList(propertyList);
    });
    console.log({ filter });
});