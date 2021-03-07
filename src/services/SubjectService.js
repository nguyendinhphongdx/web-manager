import { message } from "antd";
import sendRequest from "../axios/API";
import { Add_Subject, Get_All_Subject, Remove_Subject } from "../redux/actions/SubjectAction";

const key='updatable'
export async function GetDataSubject(dispatch){
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('subject/subjects','get')
    .then(data =>{
        const action = Get_All_Subject(data)
        dispatch(action);
        return data
    })
    .catch((error) =>{
        console.log(error);
        message.warning({ content: 'Fetch Lỗi.', key });
    })
    return request
}
export async function AddSubjectService(dispatch,data){
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('subject/add_subject','post',data)
    .then(data =>{
        const action = Add_Subject(data[0])
        console.log('action',action);
        dispatch(action);
        return 'success'
    })
    .catch((error) =>{
        console.log(error);
        message.warning({ content: 'Tên đã tồn tại.', key });
    })
    return request
}
export async function RemoveSubjectService(dispatch,data){
    message.loading({ content: 'Đang xử lý...', key });
    const body={_id:data._id}
    const request = await sendRequest('subject/remove_subject','post',body)
    .then(data =>{
        const action = Remove_Subject(data[0])
        console.log('action',action);
        dispatch(action);
        return 'success'
    })
    .catch((error) =>{
        console.log(error);
        message.warning({ content: 'Xóa không thành công !', key });
    })
    return request
}