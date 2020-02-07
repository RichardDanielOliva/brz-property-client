import styled from 'styled-components';
//import { Link } from 'react-router-dom';

//const backgroundColor = '#FFCC00';

export const NavContainer = styled.nav`
  display: flex;
  height: 80px;
  width: 100vw;
  
  position: fixed;
  top: 0;

  z-index: 3;
  background-color: rgba(0,0,0,1);

  @media only screen and (min-width: 998px) {
    height: 100vh;
    width: 90px;
    
    position: fixed;
    top: 0;
    left:0;
  }

  @media only screen and (min-width: 1198px){
    width: 100px;
  }

`;

export const NavItemsContainer = styled.div`
  display: flex;

  width: 100%;

  @media only screen and (min-width: 998px) {
    flex-direction: column;
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-bottom: 2px solid rgba(255,204,0,1);

  a{
    text-decoration: none;
  }

  @media only screen and (min-width: 998px) {
    height: 13vh;
    border-bottom: none;
  }
`;
