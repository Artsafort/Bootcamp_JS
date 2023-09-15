// import { getRoomWord } from '../../common/element.helpers.js';

let equipments = []; // Inicializamos la variable equipments aquí

export const mapPropertyListFromApiToViewModel = (newProperty, equipmentList) => {
    return {
        mainImage: newProperty.images[0],
        price: `${newProperty.price.toLocaleString()} €`,
        title: newProperty.title,
        city: newProperty.city,
        rooms: `${newProperty.rooms} ${getRoomWord(newProperty.rooms)}`,
        squareMeter: `${newProperty.squareMeter}m2`,
        bathrooms: `${newProperty.bathrooms} ${getBathroomWord(newProperty.bathrooms)}`,
        notes: newProperty.notes,
        mainFeatures: newProperty.mainFeatures,
        equipments: transformEquipment(newProperty, equipmentList),
        locationUrl: newProperty.locationUrl,
        images: Array.isArray(newProperty.images) ? newProperty.images : [],
    };
};

const getRoomWord = (rooms) => (rooms > 1 ? 'habitaciones' : 'habitación');
const getBathroomWord = (bathrooms) => {
    return bathrooms > 1 ? 'baños' : 'baño';
};
const getEquipmentsName = (equipmentIds, equipmentList) => {
    return equipmentIds
        .map((equipmentId) => equipmentList.find((equipmentItem) => equipmentId === equipmentItem.id))
        .map(({ name }) => name);
};

// Agregado el siguiente código para obtener los nombres de los equipos:
function transformEquipment(newProperty, equipmentList) {
    let transformed = '';
    transformed = newProperty.equipmentIds.map(function(obj){
        const found = equipmentList.find(element => element.id === obj);
        return found.name;
    });
    return transformed;
};
