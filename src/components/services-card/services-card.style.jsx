import styled, { css } from 'styled-components';

const backgroundColor = '#FFF';

export const ServiceCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 33.333%;
  height: 60vh;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;

  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  height: 100%;
`;

export const BodyContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,0.8);
  color: rgba(250,250,250,1);
  bottom: 0;
  width: 80%;

  padding: 0% 5%;
`;

export const Title = styled.h2`
  display: flex;
`;

export const Description = styled.p`
  display: flex;
`;

export const Button = styled.button`
  display: table-cell;
  background-color: rgba(0,0,0,0.0);
  color: rgba(250,250,250,1);

  border: none;
  border-radius: 30px;
  overflow: hidden;

  cursor: pointer;

  vertical-align: middle;

  width: 100%;
  height: 40px;
  line-height: 30px;
`;

export const Icon = styled.i`
  margin-left:7px;
`;