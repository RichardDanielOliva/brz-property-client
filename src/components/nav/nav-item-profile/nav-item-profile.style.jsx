import styled from 'styled-components';

const hoverColor = '#FFCC00';
const textColor = 'rgba(250,250,250,0.9)';

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
    font-weight: bold;
    transform: scale(1.05, 1.05);

    p{
      color: ${hoverColor};
    }
    i {
      color: ${hoverColor};
    }
  }
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
  height: 50px;
  width: 50px;
`;

export const Icon = styled.i`
  font-size: 1.75em;
  color: ${textColor};
`;


