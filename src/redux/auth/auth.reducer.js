import AuthActionTypes from "./auth.types";
import { USER_STORE_KEY, TOKEN_STORE_KEY } from '../../constants/constants';

import { useValueInLocalStorage } from '../../utils/services/local-storage.services';
import AuthServices from '../../utils/services/auth.services';

let storeUser = useValueInLocalStorage(USER_STORE_KEY, null);
let storeToken = useValueInLocalStorage(TOKEN_STORE_KEY, null);

const INITIAL_STATE = {
  user: storeUser,
  token: storeToken,
  isAuthenticated: AuthServices.isAValidateToken(storeToken),
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
        token: action.payload,
        isAuthenticated: AuthServices.isAValidateToken(action.payload)
      };
    default:
      return state;
  }
};

export default AuthReducer;
