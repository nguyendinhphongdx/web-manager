import { message } from "antd";
import sendRequest from "../axios/API";
import { Get_All_Class, Remove_Class, Update_Class } from "../redux/actions/classAction";

const key='updatable'
export async function GetDataClass(dispatch){
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('class/classes','get')
    .then(data =>{
        const action = Get_All_Class(data)
        console.log('action',action);
        dispatch(action);
        return 'success'
    })
    .catch((error) =>{
        console.log(error);
        message.warning({ content: 'Fetch Lỗi Class.', key });
    })
    return request
}
export async function UpdateDataClass(dispatch,body){
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('class/update_class','post',body)
    .then(data =>{
        console.log(data);
        const action = Update_Class(data[0])
        dispatch(action);
        return 'success'
    })
    .catch((error) =>{
        console.log(error);
        message.warning({ content: 'Cập nhật lỗi.', key });
    })
    return request
}
export async function DeleteDataClass(dispatch,_id){
    message.loading({ content: 'Đang xử lý... ', key });
    const request = await sendRequest('class/remove_class','post',_id)
    .then(data =>{
        const action = Remove_Class(_id)
        dispatch(action);
         return 'success'
    })
    .catch((error) =>{
        console.log(error);
        message.warning({ content: 'Xóa nhật lỗi.', key });
    })
    
}