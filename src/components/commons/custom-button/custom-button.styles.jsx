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

const buttonSearchResultStyles = css`
  background-color: ${bottomSelectedColor};
`;

const getButtonStyles = props => {
  if (props.isSelected) 
    return buttonSelectedStyles;
  else 
    return defaultStyle;
};

export const CustomButtonContainer = styled.button`
  display: table-cell;
  vertical-align: middle;
  width: 200px;
  height: 50px;
  font-size: 0.9rem;
  font-weight: bolder;

  border: none;
  border-radius: 30px;
  overflow: hidden;

  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    width: 80px;
  }

  ${getButtonStyles}
`;
