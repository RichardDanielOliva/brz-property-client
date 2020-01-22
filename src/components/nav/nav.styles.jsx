import styled from 'styled-components';
import { Link } from 'react-router-dom';

const backgroundColor = '#FFCC00';
const bottomBorderColor = '#FFCC00';

export const NavContainer = styled.nav`
  display: flex;
  height: 59px;
  width: 100%;
  

  justify-content: space-between;
  
  position: sticky;
  top: 0;
  border-bottom: 7px solid ${bottomBorderColor};

  z-index: 2;
  background-color: rgba(255,255,255,1);

  @media screen and (min-width: 770px) {
    width: 100%;
    padding: 0 2.5%;
  }

  @media screen and (min-width: 1196px) {
    width: 100%;
    padding: 0 calc((100% - 1600px) / 2);
  }
`;

export const MainLogoContainer = styled(Link)`
  height: 100%;
  margin: 5px;
`;

export const AppImage = styled.img`
  height: 45px;
`;

export const NavFilterContainer = styled.div`
  width: 30%;
`;

export const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
`;

export const NavItemContainer = styled.div`
  display: flex;
  width: 32%;
`;
