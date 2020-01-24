/*the container must be positioned relative:*/
import styled from 'styled-components';

const backGroundColor = 'rgba(255, 204, 0,0.9)';

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
    z-index: 99;
    border: 3px solid rgba(255, 204, 0,1);
    color: rgba(0, 0, 0,1);

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

  box-shadow: 0 0 10px 100px #1882A8 inset;

  height: 30px;
`;
  
export const Icon = styled.i`
  position: absolute;
  right: 10%;
`;
