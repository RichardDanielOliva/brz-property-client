import styled from 'styled-components';

export const PropertyAdminContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  margin: auto;
  flex-direction: column;

  @media (min-width: 998px) {
    height: 100vh;
    top: 0;

    width: calc(100vw - 90px);
    margin-left: 90px;
  }

  @media only screen and (min-width: 1198px){
    width: calc(100vw - 100px);
    margin-left: 100px;
  }
`;
