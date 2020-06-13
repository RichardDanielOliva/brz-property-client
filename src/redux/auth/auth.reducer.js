import AuthActionTypes from "./auth.types";
import { USER_STORE_KEY, TOKEN_STORE_KEY } from '../../constants/constants';

export function useLocalStorage (key, initialValue) {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
}

let storeUser = useLocalStorage(USER_STORE_KEY, null);
let storeToken = useLocalStorage(TOKEN_STORE_KEY, null);

const INITIAL_STATE = {
  user: storeUser,
  token: storeToken,
  isAuthenticated: storeUser &&  storeToken? true : false,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  let actualState = state;
  switch (action.type) {
    case AuthActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case AuthActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
};

export default AuthReducer;
