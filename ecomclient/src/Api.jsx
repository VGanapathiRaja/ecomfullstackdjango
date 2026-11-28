// import React from "react";
// import axios from 'axios'
// console.log(import.meta.env);
// console.log(import.meta.env.VITE_API_URL);
// const API = axios.create({
//     // baseURL: 'http://127.0.0.1:7878/api/',
//     // baseURL: 'https://ecompythonserver.onrender.com/api/'
//     baseURL: import.meta.url.env.VITE_API_URL
// })
// console.log("API URL:", API.defaults.baseURL);
// export default API;


import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

console.log("API URL:", API.defaults.baseURL);

export default API;