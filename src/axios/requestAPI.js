import axios from 'axios';
import { SERVER_NODE } from './configAPI';
const cancelToken = axios.CancelToken;
const source = cancelToken.source();
export default async function sendRequest(endpoint, method, body) {
    const token = localStorage.getItem('token') || '';
    // const date = localStorage.getItem('date') || '2021-07-15';
    // const dateParams  =  date?{date: date}:{}
    const request = await axios({
        method: method,
        url: `${SERVER_NODE}/${endpoint}`,
        data: body,
        cancelToken:source.token,
        headers:{
            'authorization':`Bear ${token}`
        },
        // params:dateParams
    }).then((response) => {
        if (response && response.data) {
            return response.data;
        }
    });
    console.log(request);
    return request;
}
