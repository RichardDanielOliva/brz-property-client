import styled, { css } from 'styled-components';

const backgroundInputColor = 'rgba(250,250,250,0.9)';
const textColor = 'rgb(0, 3, 90)';
const svgColor = 'rgb(0, 3, 90)';
const backgroundSvgColor = 'rgb(0, 3, 150)';

export const SearchInputContainer = styled.div`{
    display: flex;
    background-color: ${backgroundInputColor};
    height: 100%;
    width: 100%;
    align-items: center;
  }`;

export const SearchInput = styled.input`
  background: none;
  color: ${textColor};
  font-size: 14px;
  border-radius: 2px;
  border: none;
  width: 100%;
  height: 85%;
  border-left: 1px solid black;
  text-align: center;
`;
