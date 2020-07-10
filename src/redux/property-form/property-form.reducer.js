import PropertyFormTypes from "./property-form.types";
import { Advertiser, HomeFeature, UserContact, Location } from '../../utils/models/Property';

const INITIAL_STATE = {
  advertiser: new Advertiser("", "", new UserContact([''], ['']), "", 0, 0),
  feature: new HomeFeature('', '', 0, [''], 0, 0, 0, '', ''),
  location: new Location('', '', '', '', '', 0),
  coordinates: null, //latitude, logitude
  selectedFeature: '',
  images: [],
  imagesFiles: [],
  auxImagesFilesPreview: [],
  imagesSaved: [],
  imagesUrl: [],
  formStep: 0,
  isPropertieEdit: false,
  propertyID: false,
  savePropertyStart: false,
  saveImageSuccess: false,
  savePropertySuccess: false,
  saveImageFailure: false,
  savePropertyFailure: false,
};

const PropertyFormReducer = (state = INITIAL_STATE, action) => {
  let actualState = state;
  switch (action.type) {
    case PropertyFormTypes.SAVE_PROPERTY_START: 
    return {
      ...state,
      savePropertyStart: action.payload
    };
    case PropertyFormTypes.SAVE_IMAGE_SUCCESS: 
    return {
      ...state,
      saveImageSuccess: action.payload
    };
    case PropertyFormTypes.SAVE_PROPERTY_SUCCESS: 
    return {
      ...state,
      savePropertySuccess: action.payload
    };
    case PropertyFormTypes.SAVE_IMAGE_FAILURE: 
    return {
      ...state,
      saveImageFailure: action.payload
    };
    case PropertyFormTypes.SAVE_PROPERTY_FAILURE: 
    return {
      ...state,
      savePropertyFailure: action.payload
    };
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
      case PropertyFormTypes.SET_IMAGES: 
      return {
        ...state,
        imagesFiles: action.payload,
        imagesSaved: action.imagesPreview,
        auxImagesFilesPreview: action.auxImagesFilesPreview
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
      case PropertyFormTypes.SET_EMPTY_FORM: 
        return {
          ...INITIAL_STATE,
        };
      case PropertyFormTypes.SET_EDIT_PROPERTY: 
        return {
          ...state,
          advertiser: action.advertiser,
          feature: action.feature,
          location: action.location,
          coordinates: action.coordinates,
          selectedFeature: action.selectedFeature,
          imagesSaved: action.imagesSaved,
          propertyID: action.isPropertieEdit,
          isPropertieEdit: true,
        };
      default:
        return state;
    }
};

export default PropertyFormReducer;
