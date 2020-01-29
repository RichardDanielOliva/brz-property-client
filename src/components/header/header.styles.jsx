import styled from 'styled-components';
import { Link } from 'react-router-dom';

const backgroundColor = '#FFCC00';
const bottomBorderColor = '#FFCC00';

export const HeaderContainer = styled.header`
  display: flex;
  height: 100px;
  width: 100%;

  justify-content: space-between;
  top: 0;

  z-index: 2;
  background-color: rgba(0,0,0,0);
`;

export const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 12%;
`;

export const LanguageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 20%;
`;

