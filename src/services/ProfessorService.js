import { message } from "antd";
import sendRequest from "../axios/API";
import { Get_All_Professor } from "../redux/actions/ProfessorAction";
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