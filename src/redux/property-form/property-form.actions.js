import PropertyFormTypes from "./property-form.types";
import { HomeFeature, PremiseFeature, OfficeFeature, Location } from '../../utils/models/Property';
import Geocode from "react-geocode";
import store from '../store';

Geocode.setApiKey("AIzaSyAPl_sJjmr80QS-JGtkcFFXNFLvkZiqpKY");
Geocode.setLanguage("en");

export const setAdvertiserAttributte = (attributte, value) => ({
  type: PropertyFormTypes.SET_ADVERTISER_ATTRIBUTTE,
  attributte: attributte,
  payload: value
});

export const setFeatureAttributte = (attributte, value) => ({
  type: PropertyFormTypes.SET_FEATURE_ATTRIBUTTE,
  attributte: attributte,
  payload: value
});

export const setLocation = (location) => ({
  type: PropertyFormTypes.SET_LOCATION,
  payload: location
});

export const setLocationAttributte = (attributte, value) => ({
  type: PropertyFormTypes.SET_LOCATION_ATTRIBUTTE,
  attributte: attributte,
  payload: value
});

export const setFeatureType = (value, feature) => ({
  type: PropertyFormTypes.SELECT_FEATURE_TYPE,
  payload: value,
  feature: feature,
});

export const selectFeatureType = (value) => {
  let {type, status, area, extra, buildingArea, baths, rooms, buildingAge, energyCertificate} = store.getState().propertyForm.feature;
  if (!type)
    type = ''
  if (rooms)
    rooms = 1
  let feature;
  switch (value) {
    case "HOME":
      feature = new HomeFeature('', status, area, '', buildingArea, baths, rooms, buildingAge, energyCertificate)
      break;
    case "PREMISE":
      feature = new PremiseFeature(status, area, '', buildingArea, baths, buildingAge, energyCertificate, '')
      break;
    case "OFFICE":
      feature = new OfficeFeature(status, area, '', buildingArea, baths, buildingAge, energyCertificate)
      break;
    default:
      feature = new HomeFeature('', status, area, '', buildingArea, baths, rooms, buildingAge, energyCertificate)
      value = ''
      break;
  }
  console.log(value)

  return dispatch => {
    dispatch(setFeatureType(value, feature))
  }
}

export const setFormStep = value => ({
  type: PropertyFormTypes.SET_FORM_STEP,
  payload: value
})

export const setAdvertiserUserContactAttributte = (attributte, idx, value) => {
  let currentState = store.getState();
  let userContact = currentState.propertyForm.advertiser.UserContact
  userContact[attributte][idx] = value;
  return dispatch => {
    dispatch(setAdvertiserAttributte('UserContact', userContact));
  }
};

export const addAdvertiserUserContactAttributte = (attributte) => {
  let currentState = store.getState();
  let userContact = currentState.propertyForm.advertiser.UserContact
  userContact[attributte].push('');
  return dispatch => {
    dispatch(setAdvertiserAttributte('UserContact', userContact));
  }
};

export const setLocationByCoordinatePicker = (event) => {
  return dispatch => {
    dispatch({
      type: PropertyFormTypes.SET_LOCATION_BY_COORDINATE_PICKER,
      payload: [event.latlng.lat, event.latlng.lng]
    })

    Geocode.fromLatLng(event.latlng.lat, event.latlng.lng).then(
      response => {
        let address_components = response.results[0].address_components;
        let location = new Location(
          `${address_components[1] ? address_components[1].long_name : ''}, ${address_components[0] ? address_components[0].long_name : ''}`,
          address_components[2] ? address_components[2].long_name : '', 
          address_components[4] ? address_components[4].long_name : '', 
          address_components[5] ? address_components[5].long_name : '', 
          address_components[6] ? address_components[6].long_name : '', 
          0)

        dispatch(setLocation(location))
      },
      error => {
        console.error(error);
      })
  }
}


