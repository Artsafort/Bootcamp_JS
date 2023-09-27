import Axios from 'axios';

// EQUIPMENTS

const equipmentListUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentList = () => Axios.get(equipmentListUrl).then(response => {
    return response.data;
});

// PROVINCES 

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () => Axios.get(provinceListUrl).then(response => {
    return response.data;
});

// SALETYPES

const salesTypesUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () => Axios.get(salesTypesUrl).then(response => {
    return response.data;
});

// PROPERTIES

const url = `${process.env.BASE_API_URL}/properties`;

export const insertProperty = newProperty => Axios.post(url, newProperty).then(({ data }) => data);
