import { NewsConstants } from "../config/constant";

class NewsActions{
    getFeaturedNews(featured){
        return {
            type: NewsConstants.FEATURED_NEWS,
            payload: featured,
          };
    }
}
export default new NewsActions();
