import React from 'react';

//Redux
import { connect } from 'react-redux';
import { handleInputAutocompleteChange, handleInputAutocompleteSelect } from '../../../redux/filter/filter.actions';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import {
  HomeSearchInputContainer,
  LocationSearchInput
} from './home-search-input.style';

const HomeSearchInput = ({ address, handleInputAutocompleteChange, handleInputAutocompleteSelect}) => {
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleInputAutocompleteChange}
      onSelect={handleInputAutocompleteSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <HomeSearchInputContainer id="Home-Search-Input">
          <LocationSearchInput
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}/>

            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
        </HomeSearchInputContainer>
      )}
    </PlacesAutocomplete>
  );
};

const mapStateToProps = state => ({
  address: state.filter.address
});

const mapDispatchToProps = dispatch => ({
  handleInputAutocompleteChange: address => dispatch(handleInputAutocompleteChange(address)),
  handleInputAutocompleteSelect: address => dispatch(handleInputAutocompleteSelect(address))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSearchInput);
