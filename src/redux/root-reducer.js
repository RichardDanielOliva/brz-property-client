import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import NavReducer from "./nav/nav.reducer";
import MainSearchReducer from "./main-search/main-search.reducer";
import FilterReducer from './filter/filter.reducer';
import propertiesReducer from './property/property.reducer';

export default combineReducers({
  user: userReducer,
  nav: NavReducer,
  mainSearch: MainSearchReducer,
  filter: FilterReducer,
  properties: propertiesReducer,
});
