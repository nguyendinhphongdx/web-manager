import { message } from "antd";
import sendRequest from "../axios/API";
import { Get_All_Class } from "../redux/actions/classAction";

const key='updatable'
export async function GetDataClass(dispatch){
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('class/classes','get')
    .then(data =>{
        const action = Get_All_Class(data)
        dispatch(action);
        return 'success'
    })
    .catch((error) =>{
        console.log(error);
        message.warning({ content: 'Fetch Lỗi.', key });
    })
    return request
}