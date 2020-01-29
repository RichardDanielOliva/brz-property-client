import styled from 'styled-components';
import { Link } from 'react-router-dom';

const backgroundColor = '#FFCC00';
const bottomBorderColor = '#FFCC00';

export const NavContainer = styled.nav`
  display: flex;
  height: 100vh;
  width: 100px;
  
  position: fixed;
  top: 0;
  left:0;

  z-index: 3;
  background-color: rgba(0,0,0,1);
`;

export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 13vh;
  width: 100%;

  a{
    text-decoration: none;
  }
`;
