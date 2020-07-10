import styled from 'styled-components';

import { IoIosSearch } from 'react-icons/io';
//IoIosArrowDown

/*const backGroundColor = 'rgba(255, 204, 0, 0.9)';*/

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

export const Input =  styled.input`
    background-color: rgba(238, 238, 238, 0);
    font-size: 18px;
    width: 100%;
    padding: 1px;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 3;
    border: 0;
    border-bottom: 2px solid #710909;
    color: rgba(255, 255, 255,1);


    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 300;

    /* for Firefox */
    -moz-appearance: none;
    /* for Chrome */
    -webkit-appearance: none;

    &::-ms-expand {
      display: none;
    
    }
  `

export const Icon = styled(IoIosSearch)`
  position: absolute;
  right: 2%;
  font-size:1.5em;
  z-index: 2;
`;
