import styled, { css } from 'styled-components';

const textColor = 'rgba(250,250,250,0.9)';

const itemSelectedStyles = css`
  background-color: rgba(238,238,238,0.6);
`;


const getSelectedItemStyled = props => {
  if (props.isSelected) 
    return itemSelectedStyles;
};

export const NavItemProfileContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  text-align: center;
  justify-content: center;
  text-decoration-style: none;
  text-decoration: none;

  cursor: pointer;
  
  align-items: center;

  &:hover {
    background-color: rgba(238,238,238,0.6);
  }

  ${getSelectedItemStyled}
`;

export const NavProfileText = styled.p`
  color: white;
  margin: 0;
  color: ${textColor};
  `;


export const NavProfileLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;

  @media only screen and (min-width: 768px) {
    height: 45px;
    width: 45px;
  }

  @media only screen and (min-width: 1198px) {
    height: 50px;
    width: 50px;
  }
`;

export const Icon = styled.i`
  font-size: 1.75em;
  color: ${textColor};
`;


