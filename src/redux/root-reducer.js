import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import NavReducer from "./nav/nav.reducer";
import MainSearchReducer from "./main-search/main-search.reducer";

export default combineReducers({
  user: userReducer,
  nav: NavReducer,
  mainSearch: MainSearchReducer
});
