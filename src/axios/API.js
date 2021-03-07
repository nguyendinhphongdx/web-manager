import axios from 'axios';
import * as URL from './configAPI';

export default function sendRequest(endpoint, method, body) {
    const token = localStorage.getItem('token');
    const request = axios({
        method: method,
        url: `${URL.NODE_SERVER}/${endpoint}`,
        data: body,
        headers: { "Authorization": `Bear ${JSON.parse(token)}` }
    })
    .then((response) =>{
        return response.data.data;
    })
    console.log(request);
    return request; 
}