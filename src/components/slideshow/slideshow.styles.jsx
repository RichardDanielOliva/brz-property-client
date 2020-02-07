import styled, { css } from 'styled-components';

const displayStyles = css`
  display: flex;
`;

const noDisplayStyles = css`
  display: none;
`;

const displayImages = props => {
  if (props.display === "true") 
    return displayStyles;
  else 
    return noDisplayStyles;
};

export const SlideShowContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: auto;
`;

export const SlideItemContainer = styled.div`
  ${displayImages}

  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
`;

export const NumberText = styled.div`
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`;

export const Prev = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;

  &:hover{
    background-color: rgba(0,0,0,0.8);
  }
`;

export const Next = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;

  right: 0;
  border-radius: 3px 0 0 3px;

  &:hover{
    background-color: rgba(0,0,0,0.8);
  }
`;

export const PropertyImage = styled.img`
  width:100%;
  height:auto;
`;