// import styled, { css } from 'styled-components';
import styled from 'styled-components';

export const ServiceCardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 20%;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: rgba(250,250,250,1)
`

export const CardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 70%;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  width: 28%;
  height: 50vh;
`;