import { message } from "antd";
import sendRequest from "../axios/API";
import { Add_Professor, Get_All_Professor } from "../redux/actions/ProfessorAction";
const key='updatable'
export async function GetDataProfessor(dispatch){
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('professor/professores','get')
    .then(data =>{
        const action = Get_All_Professor(data)
        dispatch(action);
        return data
    })
    .catch((error) =>{
        console.log(error);
        message.warning({ content: 'Fetch Lỗi.', key });
    })
    return request
}
export async function Add_Professor_Service(dispatch, data){
    message.loading({ content: 'Đang xử lý...', key });
    const form = new FormData();
    form.append('file',data.file);
    form.append('name',data.name);
    form.append('description',data.description);
    form.append('password',data.password);
    form.append('age',`${data.age}`);
    form.append('status',data.status?'actived':'blocked');
    form.append('email',data.email);
    const request = await sendRequest('professor/add_professor','post',form)
    .then(data =>{
        console.log('data',data);
        const action = Add_Professor(data[0])
        dispatch(action);
        return data
    })
    .catch((error) =>{
        console.log(error.response);
        if(error.response.status===400){
            message.error({ content: `${'Email is exitst'}`, key });
        }else{
            message.warning({ content: 'Thêm Lỗi.', key });
        }
    })
    return request
}
export async function SynchonousDataProfessor(dispatch){
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('professor/syncClass','post')
    .then(data =>{
        const action = Get_All_Professor(data)
        dispatch(action);
        return data
    })
    .catch((error) =>{
        console.log(error);
        message.warning({ content: 'Fetch Lỗi.', key });
    })
    return request
}