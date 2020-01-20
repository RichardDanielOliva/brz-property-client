import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavProfileContainer = styled.ul`
            width: 240px;
            height: auto;
            display: flex;
            flex-direction: column;
            padding: 5px;
            background: rgb(204, 0, 51);
            border: 1px solid black;
            top: 57px;
            right: 5%;
            z-index: 5;
            position: absolute;
    
        &:before {
          content: "";
          position: absolute;
          right: 0;
          top: 57px;
          height: 12px;
          width: 100%;
        }
    
        &:after {
          content: "";
          right: 48px;
          top: 69px;
          border: 8px solid transparent;
          border-bottom: 8px solid rgba(125, 125, 125, 0.2);
          position: absolute;
        }
    
      @media screen and (min-width: 1196px) {
        & {
          width: 240px;
          height: auto;
          display: flex;
          flex-direction: column;
          padding: 20px;
          background: white;
          border: 1px solid black;
          top: 57px;
          right: 15%;
          z-index: 5;
          position: absolute;
        }
    
        &:after,
        &:before {
          bottom: 100%;
          left: 240px;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }
    
        &:after {
            border-color: rgba(136, 183, 213, 0);
            border-bottom-color: white;
            border-width: 9px;
            margin-left: -9px;
          }
      
          &:before {
            border-color: rgba(194, 225, 245, 0);
            border-bottom-color: black;
            border-width: 10px;
            margin-left: -10px;
          }
      }
`;

export const ProfileInfoContainer = styled.li`
    width: 90%;
    margin: 5%;
    display: flex;
    flex-direction: column;
`;

export const MainInfoContainer = styled.div`
    display: flex;
`;

export const SectionImage = styled.img`
    height: 45px;
    width: 45px;
    border: 2px solid rgb(250, 250, 250);
    border-radius: 22px;
`;

export const ResumeContainer = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    border: none;
`;

export const ViewProfileLink = styled(Link)`
    margin: 0 auto;
    color: rgb(238, 238, 238);
`;

export const ShortCutsContainer = styled.div`
    display: column;
`;
