//import styled, { css } from 'styled-components';
import styled from 'styled-components';

const textColor = 'rgb(0, 3, 90)';
const backgroundColor = 'rgba(250,250,250,0.9)';

export const LocationSearchInputContainer = styled.div`{
    position: relative;
    display: flex;
    flex-direction:column
    height: 100%;
    width: 100%;
    align-items: center;
  }`;

export const SearchInput = styled.input`
  background-color: ${backgroundColor};
  color: ${textColor};

  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 250;

  border-radius: 2px;
  border: none;
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const AutocompleteDropdownContainer = styled.div`{
  position: absolute;
  background-color: ${backgroundColor};

  width: 100%;
  top: 100%;
}`;


export const SugestionContainer = styled.div`{
  margin: 0 1%;
  display: flex;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 250;
}`;

export const SugestionDescriptionContainer = styled.span`{
  margin: 0 2%;
}`;

export const Icon = styled.i`
`;


