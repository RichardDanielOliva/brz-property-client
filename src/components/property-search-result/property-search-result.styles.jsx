import styled, { css } from 'styled-components';

export const PropertySearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const PSR_HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 8vh;
  background-color: rgba(0,0,0,1);
  border-bottom: 2px solid rgba(255,204,0,1);
`;

export const Icon =  styled.i`
  margin-right:7px;
`;