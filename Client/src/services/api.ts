import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://proffy-apso.onrender.com'
});

