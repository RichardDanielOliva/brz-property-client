import store from '../store';
import FilterActionTypes from "./filter.types";
import {fetchPropertiesStartAsync} from '../property/property.actions';
import {selectFilterResume} from './filter.selectors'


export const handleInputAttributte2 = (value, name) => ({
  type: FilterActionTypes.SET_SIMPLE_ATTRIBUTTE,
  payload: value,
  name: name
});

export const handleInputAttributte = (value, name) => {
  let currentState = store.getState();
  currentState.filter[name] = value;
  
  const filterState = mapCurrentStateToFilterObject(currentState.filter);

  return dispatch => {
    dispatch(handleInputAttributte2(value, name));
    dispatch(fetchPropertiesStartAsync(filterState));
  }
};

export const handleCheckboxAttributte = (value, name) => ({
  type: FilterActionTypes.SET_COMPOUND_ATTRIBUTTE,
  payload: value,
  name: name
});

const mapCurrentStateToFilterObject= filter => ({
  type: filter.propertyType,
  operation: filter.propertyOperation,
  price: {
      min: filter.propertyMinPrice,
      max: filter.propertyMaxPrice,
  },
  area:{
      from: filter.areaFrom,
      to: filter.areaTo
  },
  features: {
      rooms: filter.homeRooms,
      baths: filter.homeBathRooms,
      extras: filter.homeExtras,
      types: filter.homeType
  },
  status: filter.propertyStatus,
}
)



