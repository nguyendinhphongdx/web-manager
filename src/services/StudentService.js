import { message } from "antd";
import sendRequest from "../axios/API";
import { Add_Student, Get_All_Student, Remove_Student } from "../redux/actions/studentAction";
const key='updatable'
export async function GetDataStudent(dispatch){
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('student/students','get')
    .then(data =>{
        const action = Get_All_Student(data)
        dispatch(action);
        return data
    })
    .catch((error) =>{
        console.log(error);
        message.warning({ content: 'Fetch Lỗi.', key });
    })
    return request
}
export async function Add_Student_Service(dispatch,data){
    message.loading({ content: 'Đang xử lý...', key });
    const form = new FormData();
    form.append('file',data.file);
    form.append('name',data.name);
    form.append('description',data.description);
    form.append('password',data.password);
    form.append('age',`${data.age}`);
    form.append('status',data.status?'actived':'blocked');
    form.append('email',data.email);
    const request = await sendRequest('student/add_student','post',form)
    .then(data =>{
        console.log('data',data);
        const action = Add_Student(data[0])
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
export async function Delete_Student_Service(dispatch,body){
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('student/remove_student','post',body)
    .then(data =>{
        const action = Remove_Student(data[0])
        dispatch(action);
        return data
    })
    .catch((error) =>{
        console.log(error.response);
        if(error.response.status===400){
            message.error({ content: `${'Student is not Found'}`, key });
        }else{
            message.warning({ content: 'Delete Failed.', key });
        }
    })
    return request
}