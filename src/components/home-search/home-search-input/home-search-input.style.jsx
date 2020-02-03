import styled, { css } from 'styled-components';

const textColor = 'rgb(0, 3, 90)';
const svgColor = 'rgb(0, 3, 90)';
const backgroundSvgColor = 'rgb(0, 3, 150)';

export const HomeSearchInputContainer = styled.div`{
    position: relative;
    display: flex;
    flex-direction:column
    height: 100%;
    width: 100%;
    align-items: center;
  }`;

export const LocationSearchInput = styled.input`
  background-color: rgba(250,250,250,0.9);
  color: ${textColor};
  font-size: 14px;
  border-radius: 2px;
  border: none;
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const AutocompleteDropdownContainer = styled.div`{
  position: absolute;
  width: 100%;
  top: 100%;
}`;