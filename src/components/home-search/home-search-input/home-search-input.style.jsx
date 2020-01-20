import styled, { css } from 'styled-components';

const backgroundInputColor = 'rgb(250, 250, 250)';
const textColor = 'rgb(0, 3, 90)';
const svgColor = 'rgb(0, 3, 90)';
const backgroundSvgColor = 'rgb(0, 3, 150)';

export const HomeSearchInputContainer = styled.div`{
    display: flex;
    height: 100%;
    align-items: center;
  }`;

export const SearchInput = styled.input`
  background: none;
  background-color: ${backgroundInputColor};
  color: ${textColor};
  font-size: 14px;
  border-radius: 2px;
  border: none;
  width: 85%;
  height: 65%;
  text-align: center;
`;

const inputTextLogoCSS = css`
    display: flex;
    justify-content: center;
    align-items: center;
    fill: white;
    background-color: ${backgroundSvgColor};
    `;

const NoInputTextLogoCSS = css`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 40px;
    fill: ${svgColor};
    margin: 0 auto;
    `;

const getSearchLogoStyle= props => {
    return (props.searchInputText) ? inputTextLogoCSS : NoInputTextLogoCSS;
}

export const SearchLogoContainer = styled.div`{
    display: flex;
    width: 40px;
    ${getSearchLogoStyle}
    height: 70%;
    border-radius: 2px;
  }`;