import { message } from "antd";
import sendRequest from "../axios/API";
import { Get_All_Student } from "../redux/actions/studentAction";
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