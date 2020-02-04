import styled, { css } from 'styled-components';

const bottomHoverColor = '#FFCC00';
const svgFillColor = 'rgb(0, 0, 0)';

export const SelectPropertyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 200px;
  height: 100%;
  justify-content: space-around;
  align-items: center;

  border: none;
  border-radius: 2px;

  background-color: rgba(250,250,250,0.9);
`;

export const PropertySelectText = styled.h4`
  margin: 0;
  padding: 0;
`;

export const PropertySelectDropDownMenu = styled.div`
  height: 20px;
  width: 20px;
  fill: ${svgFillColor};
`;

export const PropertySelectTitle = styled.div`
  display: flex;
`;

export const PropertySelect = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  justify-content: space-around;
  border: none;

  background-color: rgba(250,250,250,0.0);

  cursor: pointer;
`;

const SelectedStyle = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50px;

  width: 120px;
  border: none;
  border-radius: 5px;

  background-color: rgba(250,250,250,0.9);
`;

const noSelectedStyle = css`
  display: none;
`;

const getOptionsStyles = props => {
  if (props.isSelected) 
    return SelectedStyle;
  else 
    return noSelectedStyle
};

export const PropertyOptions = styled.div`
    ${getOptionsStyles}
`;

export const PropertyOption = styled.div`
  height: 30nppx;
  cursor: pointer;
  text-align: center;
`;

export const PropertyOptionText = styled.h5`
  margin: 0;
  padding: 0;

  &:hover{
    background-color: ${bottomHoverColor};
  }
`;

export const Icon = styled.i`
  margin-left:7px;
  width: 21px;
  color:black;
`;