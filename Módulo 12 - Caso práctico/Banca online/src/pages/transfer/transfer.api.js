// Importa la librería Axios
import Axios from 'axios';

// Define la URL de la API de cuentas utilizando una variable que está previamente definida:
const transferUrl = `${process.env.BASE_API_URL}/transfer`;
const accountUrl = `${process.env.BASE_API_URL}/account-list`;

export const createTransfer = transfer => Axios.post(transferUrl, transfer).then(({ data }) => { data });

// Exporta una función llamada 'getAccounts' que acepta un parámetro 'id'.
export const getAccounts = (id) =>
// Utiliza Axios para hacer una solicitud GET a la URL de cuentas.
  Axios.get(accountUrl, { params: { id } })
// Cuando la solicitud es exitosa, Axios devuelve una promesa que se resuelve con una respuesta.
  .then(({ data }) => {
// Extrae los datos de la respuesta y los devuelve como resultado.
    return data;
  });