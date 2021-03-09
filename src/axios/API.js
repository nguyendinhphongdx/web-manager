import axios from 'axios';
import * as URL from './configAPI';

export default function sendRequest(endpoint, method, body) {
    const token = JSON.parse(localStorage.getItem('token'))||'';
    const request = axios({
        method: method,
        url: `${URL.NODE_SERVER}/${endpoint}`,
        data: body,
        headers: { "Authorization": `Bear ${token}` }
    })
    .then((response) =>{
        return response.data.data;
    })
    
    console.log(request);
    return request; 
}