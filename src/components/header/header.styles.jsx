import styled from 'styled-components';
//import { Link } from 'react-router-dom';

//const backgroundColor = '#FFCC00';

export const HeaderContainer = styled.header`
  display: flex;
  height: 100%;
  width: 100%;

  justify-content: space-between;
  top: 0;

  z-index: 2;
`;

export const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 12%;
`;

export const LogoImage = styled.img`
  margin-top: 5%;
  height: 90%;
`;

export const LanguageContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const LanguageList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const LanguageItem = styled.li`
  height:auto;
`;

export const LanguageText = styled.h4`
  border-left: 2px solid rgba(0,0,0,1);
  color: rgba(0,0,0,1);
  margin: 0;
  padding: 0.3em 1em;
`;


