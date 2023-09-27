import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyDetail = id => 
Axios.get(`${url}/${id}`).then(({ data }) => data);

const equipmentListUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentList = () => 
Axios.get(equipmentListUrl).then(({ data }) => data);

// export const submitData = newProperty => 
// Axios.post(url, newProperty).then(({ data }) => data );

const contactUrl = `${process.env.BASE_API_URL}/contact`;

export const savedData = form => 
Axios.post(contactUrl, form).then(response => {
    return response.data;
});
