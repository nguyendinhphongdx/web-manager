
import {NewsConstants} from '../config/constant';
const initialState = {
   featured:[]
};

const news = (state = initialState, action) => {
    switch (action.type) {
        case NewsConstants.FEATURED_NEWS: {
            const featured = action.payload;
            return {
                ...state,
                featured:featured
            }
        }
        default: return { ...state };
    }
};

export default news;
