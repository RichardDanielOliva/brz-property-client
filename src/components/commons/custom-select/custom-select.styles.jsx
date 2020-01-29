/*the container must be positioned relative:*/
import styled from 'styled-components';

const backGroundColor = 'rgba(255, 204, 0, 0.9)';

export const CustomSelectContainer = styled.div`
  display:flex;
  justify-content:center;
  width: 100%;
`;

export const AuxiliarRelativeContainer = styled.div`
    position: relative;
    font-family: Arial;
    width: 100%;
    height: 100%;
`;

export const Select =  styled.select`
    background-color: rgba(238, 238, 238, 0);
    font-size: 18px;
    width: 100%;
    height: 32px;
    padding: 3px;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 3;
    border: 0;
    border-bottom: 2px solid rgba(182, 149, 3, 1);
    color: rgba(0, 0, 0,1);


    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 300;

    cursor: pointer;

    /* for Firefox */
    -moz-appearance: none;
    /* for Chrome */
    -webkit-appearance: none;

    &::-ms-expand {
      display: none;
    
    }
  `
export const Option = styled.option`
  background-color: rgba(238, 238, 238, 0);

  &:hover {
    background-color: rgb(235, 192, 0);
  }

  box-shadow: 0 0 10px 100px #d3aa04 inset;

  height: 30px;

  
`;
  
export const OptionText = styled.p`
position: absolute;
right: 2%;
font-size:1.5em;
z-index: 2;
`;


export const Icon = styled.i`
  position: absolute;
  right: 2%;
  font-size:1.5em;
  z-index: 2;
`;
