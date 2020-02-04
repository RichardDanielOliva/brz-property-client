import styled, { css } from 'styled-components';

const bottomSelectedColor = '#FFCC00';
const bottomHoverColor = '#FFCC00';

const defaultStyle = css`
  background-color: rgba(250,250,250,0.8);

  &:hover {
    background-color: ${bottomHoverColor};
  }
`;

const buttonSelectedStyles = css`
  background-color: ${bottomSelectedColor};
`;

const getButtonStyles = props => {
  if (props.isSelected) 
    return buttonSelectedStyles;
  else 
    return defaultStyle;
};

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 200px;
  height: 50px;

  border: none;
  border-radius: 30px;
  overflow: hidden;

  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.15);

  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    width: 80px;
  }

  ${getButtonStyles}
`;
