// import styled, { css } from 'styled-components';
import styled from 'styled-components';

export const PropertySearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 8vh;
  background-color: rgba(0,0,0,1);
  border-bottom: 2px solid rgba(255,204,0,1);
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 6vh;
  border-bottom: 3px solid rgba(255,204,0,1);
`;

export const BodyContainer = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 92vh;
`
export const ViewContainer =  styled.div`
  a { text-decoration: none;}
`;

export const LocationSearchContainer =  styled.div`
  width: 25%;
  height: 80%;

  border-bottom: 2px solid rgba(182,149,3,1);
  border-radius: 5px;
`;

export const SortedContainer =  styled.div`
  width: 15%;
  height: 80%;
`;

export const ButtonText =  styled.h4`
  margin: 0;
  padding: 0;
`;

export const Icon =  styled.i`
  margin-right:7px;
`;