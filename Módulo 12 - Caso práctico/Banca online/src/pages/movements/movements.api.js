import Axios from 'axios';

// Definición de las URL de la API
const url = `${process.env.BASE_API_URL}/movements`;
const accountUrl = `${process.env.BASE_API_URL}/account-list`;

// Función para obtener los movimientos de una cuenta específica
export const getMovements = id => {
// Se realiza una solicitud GET a la URL 'url' con el parámetro accountId igual a 'id'
  return Axios.get(url, { params: { accountId: id } }).then(({ data }) => {
// Una vez que se recibe la respuesta de la API, se devuelve el campo 'data'
// que contiene la lista de movimientos relacionados con la cuenta
    return data;
  });
};

// Función para obtener la información de una cuenta específica
export const getAccounts = id => {
// Se realiza una solicitud GET a la URL 'accountUrl' con el parámetro 'id'
    return Axios.get(accountUrl, { params: { id } }).then(({ data }) => {
// Una vez que se recibe la respuesta de la API, se muestra en la consola
        console.log(data);
// Se devuelve el primer elemento del array 'data', que contiene la información de la cuenta
        return data[0];
      });
    };