import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  currentLanguage: null,
  loginDropdownHidden: false,
  showPassword: false,
  profileImage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case UserActionTypes.SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload
      };
    case UserActionTypes.TOGGLE_LOGINDROPDOWN_HIDDEN:
      return {
        ...state,
        loginDropdownHidden: !state.loginDropdownHidden
      };
    case UserActionTypes.TOGGLE_SHOW_PASSWORD:
      return {
        ...state,
        showPassword: !state.showPassword
      };
    default:
      return state;
  }
};

export default userReducer;
