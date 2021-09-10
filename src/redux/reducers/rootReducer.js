import { combineReducers } from "redux";
import changeState from "./layoutReducer";
import news from "./newsReducer";
import services from "./servicesReducer";
import settings from "./settingsReducer";
import statistic from "./statisticReducer";
import users from "./userReducer";

const myReducers = combineReducers({
  Services:services,
  Layout:changeState,
  Statistic:statistic,
  News:news,
  Settings:settings,
  Users:users
});
export default myReducers;