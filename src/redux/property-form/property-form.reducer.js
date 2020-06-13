import PropertyFormTypes from "./property-form.types";
import { Advertiser, HomeFeature, UserContact, Location } from '../../utils/models/Property';

const INITIAL_STATE = {
  advertiser: new Advertiser("", "", new UserContact([''], ['']), "", 0, 0),
  feature: new HomeFeature('', '', 0, '', 0, 0, 0, '', ''),
  location: new Location('', '', '', '', '', 0),
  coordinates: null, //latitude, logitude
  selectedFeature: '',
  formStep: 0
};

const PropertyFormReducer = (state = INITIAL_STATE, action) => {
  let actualState = state;
  switch (action.type) {
    case PropertyFormTypes.SET_ADVERTISER_ATTRIBUTTE: 
      return {
        ...state,
        advertiser: {
          ...actualState.advertiser, 
          [action.attributte] : action.payload
        }
      };
      case PropertyFormTypes.SET_FEATURE_ATTRIBUTTE: 
      return {
        ...state,
        feature: {
          ...actualState.feature, 
          [action.attributte] : action.payload
        }
      };
      case PropertyFormTypes.SELECT_FEATURE_TYPE: 
      return {
        ...state,
        selectedFeature : action.payload,
        feature: action.feature
      };
      case PropertyFormTypes.SET_LOCATION: 
      return {
        ...state,
        location: action.payload
      };
      case PropertyFormTypes.SET_LOCATION_ATTRIBUTTE: 
      return {
        ...state,
        location: {
          ...actualState.location, 
          [action.attributte] : action.payload
        }
      };
      case PropertyFormTypes.SET_LOCATION_BY_COORDINATE_PICKER: 
      return {
        ...state,
        coordinates: action.payload
      };
      case PropertyFormTypes.SET_FORM_STEP: 
        return {
          ...state,
          formStep: action.payload
        };
      default:
        return state;
    }
};

export default PropertyFormReducer;
