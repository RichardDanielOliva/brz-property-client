import styled, { css } from 'styled-components';

const backgroundColor = '#FFF';

export const ServiceCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 4px 0 rgba(102,102,100,0.24);
`;

export const BackgroundImage = styled.img`
  height: 100%;
  opacity: 1;
`;

export const BodyContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,0.9);
  color: rgba(250,250,250,1);
  bottom: 0;
  width: 90%;
  border-radius: 10px;
`;

export const TextContainer = styled.div`
  padding: 0% 5%;
  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const Title = styled.h4`
  display: flex;
`;

export const Description = styled.p`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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

  &:hover {
    background-color:  rgba(0,41,115,0.7);
  }
`;

export const Icon = styled.i`
  margin-left:7px;
`;