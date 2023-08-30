import Axios from 'axios';

const transferUrl = `${process.env.BASE_API_URL}/transfer`;
const accountUrl = `${process.env.BASE_API_URL}/accounts`;

export const createTransfer = id => Axios.post(transferUrl, { params: { accountId: id}}).then(({ data }) => { data });

export const getAccounts = id => Axios.get(`${accountUrl, { params: { id }}}`).then(({ data }) => { data[0] });
