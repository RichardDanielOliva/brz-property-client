import React from 'react';

import {
  SearchInputContainer,
  SearchInput
} from './search-input.style';

const CustomSearchInput = ({searchInputText, ...props}) => {
  return (
    <SearchInputContainer>
      <SearchInput {...props}/>
    </SearchInputContainer>
  );
};

export default CustomSearchInput;