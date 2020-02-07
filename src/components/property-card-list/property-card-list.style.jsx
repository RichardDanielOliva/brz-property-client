// import styled, { css } from 'styled-components';
import styled from 'styled-components';

export const PropertyCardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
`;

export const PropertyCardContainer = styled.div`
  margin-top:30px;
  width: 80%;
  height: 50vh;

  @media (min-width: 770px) {
    width: 48%;
    height: 45vh;
  }

  @media (min-width: 998px) {
    width: 45%;
    height: 45vh;
  }

  @media (min-width: 1198px) {
    width: 30%;
    height: 50vh;
  }
`;