import styled from 'styled-components';

const svgFillColor = 'rgb(0, 0, 0)';
const hoverColor = '#FFCC00';
const textColor = 'rgb(0, 0, 0)';
const profileImgBorderColor = 'rgb(250, 250, 250)';

export const NavItemProfileContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  text-decoration-style: none;
  text-decoration: none;

  justify-content: space-around;
  align-items: center;

  fill: ${svgFillColor};
  color: ${textColor};

  &:hover {
    fill: ${hoverColor};
    color: ${hoverColor};
    font-weight: bold;
    transform: scale(1.05, 1.05);
  }
`;

export const NavProfileText = styled.div`
  padding: 0 2%;
`;

export const NavProfileDropdownLogo = styled.div`
  height: 20px;
  width: 20px;
`;

export const NavProfileLogo = styled.div`
  height: 32px;
  width: 32px;
`;


