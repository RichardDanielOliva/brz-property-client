import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 12%;
  flex-direction: column;

  @media (min-width: 770px) {
    width: calc(100vw - 100px);
    margin-left: 100px;
  }
`;

export const AdminPageContainer = styled.div`
  top: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  margin: auto;
  flex-direction: column;

  @media (min-width: 998px) {
    min-height: 100vh;
    top: 0;

    width: calc(100vw - 90px);
    margin-left: 90px;
  }

  @media only screen and (min-width: 1198px){
    width: calc(100vw - 100px);
    margin-left: 100px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  width: 40%;
  height: 20%;
`;
