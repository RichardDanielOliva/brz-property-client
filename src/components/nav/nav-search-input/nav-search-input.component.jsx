import React from 'react';

//Redux
import { connect } from 'react-redux';
import { handleSearchInput } from '../../../redux/nav/nav.actions';

import { getLogoComponent } from '../../../utils/LogoFactory';

import {
  NavSearchContainer,
  SearchInput,
  SearchLogoContainer
} from './nav-search-input.style';

const NavSearchInput = ({ searchInputText, handleSearchInput }) => {
  const DefaultInputText = 'Search or jump to...';

  return (
    <NavSearchContainer>
      <SearchInput
        onChange={event => handleSearchInput(event.target.value)}
        className={searchInputText ? 'searching' : ''}
        placeholder={DefaultInputText}
      ></SearchInput>
      <SearchLogoContainer searchInputText={searchInputText}>
        {getLogoComponent('search')}
      </SearchLogoContainer>
    </NavSearchContainer>
  );
};

const mapStateToProps = state => ({
  searchInputText: state.nav.searchInputValue
});

const mapDispatchToProps = dispatch => ({
  handleSearchInput: inputValue => dispatch(handleSearchInput(inputValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSearchInput);
