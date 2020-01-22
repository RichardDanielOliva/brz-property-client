import styled, { css } from 'styled-components';

const bottomSelectedColor = '#FFCC00';
const bottomHoverColor = '#FFCC00';
const svgFillColor = 'rgb(0, 0, 0)';

export const SelectPropertyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 120px;
  height: 50px;
  justify-content: space-around;
  align-items: center;

  border: none;
  border-radius: 2px;

  background-color: rgba(250,250,250,0.8);
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
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  font-weight: bolder;

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

  background-color: rgba(250,250,250,0.8);
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
  height: 25px;
  cursor: pointer;
  text-align: center;
`;

export const Icon = styled.i`
  margin-left:7px;
  width: 21px;
  color:black;
`;