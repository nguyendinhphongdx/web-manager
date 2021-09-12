import { combineReducers } from "redux";
import calendar from "./CalendarReducer";
import _class from "./classReducer";
import history from "./historyReducer";
import changeState from "./layoutReducer";
import news from "./newsReducer";
import services from "./servicesReducer";
import settings from "./settingsReducer";
import statistic from "./statisticReducer";
import users from "./userReducer";
import professor from "./professorReducer";
const myReducers = combineReducers({
  Services:services,
  Layout:changeState,
  Statistic:statistic,
  News:news,
  Settings:settings,
  Users:users,
  Calendar:calendar,
  History:history,
  Class:_class,
  Professor:professor
});
export default myReducers;