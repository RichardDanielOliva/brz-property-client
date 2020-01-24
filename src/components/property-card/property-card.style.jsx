import styled, { css } from 'styled-components';

const backgroundColor = '#FFF';

export const PropertyCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 33.333%;
  height: 60vh;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const PropertyImage = styled.img`
  width:100%;
  height:auto;
`;

export const BodyContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,0.8);
  color: rgba(250,250,250,1);
  bottom: 0;
  width: 80%;
`;

export const TextContainer = styled.div`
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
  border-top: 1px solid #fff;
  overflow: hidden;

  cursor: pointer;

  vertical-align: middle;

  width: 100%;
  height: 50px;
  line-height: 30px;

  font-size: 1rem;
  font-weight: bolder;
`;

export const Icon = styled.i`
  margin-left:7px;
`;

export const FooterContainer = styled.div`
  display: flex;
`;