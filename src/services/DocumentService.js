import { message } from "antd";
import sendRequest from "../axios/API";
import { Add_Document, Get_All_Document } from "../redux/actions/documentAction";

const key='updatable'
export async function AddDocumentService(dispatch,body){
    const form = new FormData();
    form.append('file',body.file);
    form.append('title',body.title);
    form.append('description',body.description);
    form.append('_idSubject',body._idSubject);
    form.append('_idAuth',body._idAuth);
    form.append('status',body.status?'actived':'blocked');
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('document/upload','post',form)
    .then(data =>{
        const action = Add_Document(data[0])
        dispatch(action);
        return data
    })
    .catch((error) =>{
        console.log(error);
        if(error.response){
            message.warning({ content: error.response.data.message, key });
        }else{
            message.warning({ content: 'Thêm Lỗi.', key });
        }
    })
    return request
}

export async function GetDataDocument(dispatch){
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('document/documents','get')
    .then(data =>{
        const action = Get_All_Document(data)
        dispatch(action);
        return data
    })
    .catch((error) =>{
        console.log(error);
        message.warning({ content: 'Fetch Lỗi.', key });
    })
    return request
}
