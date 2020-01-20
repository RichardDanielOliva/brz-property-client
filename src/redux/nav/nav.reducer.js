import NavActionTypes from "./nav.types";

const INITIAL_STATE = {
  searchInputValue: null,
  profileDrownDown: false,
  enterpriseDrownDown: false,
  languageDrownDown: false,
};

const NavReducer = (state = INITIAL_STATE, action) => {
  let actualState = state;
  switch (action.type) {
    case NavActionTypes.SET_SEARCH_INPUT_VALUE:
      return {
        ...state,
        searchInputValue: action.payload
      };
    case NavActionTypes.DISPLAY_PROFILE_DROWN_DOWN:
      return {
        ...state,
        profileDrownDown: !actualState.profileDrownDown
      };
    default:
      return state;
  }
};

export default NavReducer;
