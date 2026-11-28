import React from "react";
import axios from 'axios'
const API = axios.create({
    // baseURL: 'http://127.0.0.1:7878/api/'
    baseURL: 'https://ecompythonserver.onrender.com/api/'
})
export default API;