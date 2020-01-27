import FilterActionTypes from "./filter.types";

export const handleInputAttributte = (value, name) => ({
  type: FilterActionTypes.SET_SIMPLE_ATTRIBUTTE,
  payload: value,
  name: name
});

export const handleCheckboxAttributte = (value, name) => ({
  type: FilterActionTypes.SET_COMPOUND_ATTRIBUTTE,
  payload: value,
  name: name
});




