import React from 'react';

//Redux
import { connect } from 'react-redux';
import { handleSearchInput } from '../../../redux/nav/nav.actions';

import { getLogoComponent } from '../../../utils/LogoFactory';

import {
  HomeSearchInputContainer,
  SearchInput,
  SearchLogoContainer
} from './home-search-input.style';

const HomeSearchInput = ({ children, searchInputText, handleSearchInput }) => {
  const DefaultInputText = children;

  return (
    <HomeSearchInputContainer id="Home-Search-Input">
      <SearchInput
        onChange={event => handleSearchInput(event.target.value)}
        className={searchInputText ? 'searching' : ''}
        placeholder={DefaultInputText}
      ></SearchInput>
      <SearchLogoContainer searchInputText={searchInputText}>
        {getLogoComponent('search')}
      </SearchLogoContainer>
    </HomeSearchInputContainer>
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
)(HomeSearchInput);
