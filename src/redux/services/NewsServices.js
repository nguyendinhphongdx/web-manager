import { message } from 'antd';
import sendRequest from '../../axios/requestAPI';
import NewsActions from '../actions/newsActions';
import Converter from '../../helpers/converter';
import { openSuccessNotif } from '../../views/notifications/notif/notifStore';
class NewsServices{
    QueryFeaturedNews = async (dispatch) => {
        const result = await sendRequest('/mobile/new/highlights', 'get')
        .then(response => {
            if(response.status == 200){
                const action = NewsActions.getFeaturedNews(Converter.convertFeaturedNews(response.data || []));
                dispatch(action);
                return response.data
            }else{
                throw new Error(response.message);
            }
        })
        .catch((error) => {
            console.log(error);
            // openSuccessNotif('Thông báo', error.message, 2000, 'error');
        });
    return result;
      }  
}
export default new NewsServices();