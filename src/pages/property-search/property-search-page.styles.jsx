import styled from 'styled-components';

export const PropertySearchPageContainer = styled.div`
  top: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 770px) {
    flex-direction: row;
  }

  @media (min-width: 998px) {
    flex-direction: row;
    top: 0;
    width: calc(100vw - 90px);
    margin-left: 90px;
  }

  @media only screen and (min-width: 1198px){
    width: calc(100vw - 100px);
    margin-left: 100px;
  }
`;

export const PropertySearchFilterContainer = styled.aside`
  display: flex;
  width: 100%;

  @media (min-width: 770px) {
    width: 30%;
  }

  @media (min-width: 998px) {
    width: 25%;
    min-height: 100vh;
  }

  @media (min-width: 1198px) {
    width: 18%;
    min-height: 100vh;
  }
`;

export const PropertySearchResultContainer = styled.main`
  display: flex;
  width: 100%;

  @media (min-width: 770px) {
    width: 70%;
  }

  @media (min-width: 998px) {
    width: 75%;
    min-height: 100vh;
  }

  @media (min-width: 1198px) {
    width: 81%;
    min-height: 100vh;
  }
`;