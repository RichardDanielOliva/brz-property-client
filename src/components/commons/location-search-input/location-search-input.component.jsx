import React from 'react';

//Redux
import { connect } from 'react-redux';
import { handleInputAutocompleteChange, handleInputAutocompleteSelect } from '../../../redux/filter/filter.actions';

import PlacesAutocomplete from 'react-places-autocomplete';

import {
  LocationSearchInputContainer,
  SearchInput,
  AutocompleteDropdownContainer,
  SugestionContainer,
  SugestionDescriptionContainer,
  //Icon
} from './location-search-input.style';

const LocationSearchInput = ({ address, handleInputAutocompleteChange, handleInputAutocompleteSelect}) => {
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleInputAutocompleteChange}
      onSelect={handleInputAutocompleteSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <LocationSearchInputContainer id="Home-Search-Input">
          <SearchInput
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}/>

            <AutocompleteDropdownContainer className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { cursor: 'pointer' }
                  : { cursor: 'pointer' };
                return (
                  <SugestionContainer
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <i className="fas fa-map-marker-alt"/>
                    <SugestionDescriptionContainer>{suggestion.description}</SugestionDescriptionContainer>
                  </SugestionContainer>
                );
              })}
            </AutocompleteDropdownContainer>
        </LocationSearchInputContainer>
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
)(LocationSearchInput);
