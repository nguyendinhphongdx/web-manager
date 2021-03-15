import { message } from "antd";
import sendRequest from "../axios/API";
import { Get_All_History } from "../redux/actions/historyAction";

const key='updatable'
export async function GetDataHistory(dispatch){
    message.loading({ content: 'Đang xử lý...', key });
    const request = await sendRequest('history/histories','get')
    .then(data =>{
        const action = Get_All_History(data)
        dispatch(action);
        return data
    })
    .catch((error) =>{
        console.log(error);
        message.warning({ content: 'Fetch Lỗi.', key });
    })
    return request
}
