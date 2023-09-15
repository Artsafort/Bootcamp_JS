import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyDetail = id => 
Axios.get(`${url}/${id}`).then(({ data }) => data);

const equipmentListUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentList = () => 
Axios.get(equipmentListUrl).then(({ data }) => data);

// export const submitData = newProperty => 
// Axios.post(url, newProperty).then(({ data }) => data );

export const isValidContact = submitForm => 
Axios.post(url, submitForm).then(response => {
    return response.data;
});
