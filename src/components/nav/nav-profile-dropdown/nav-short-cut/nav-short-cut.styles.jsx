import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShortCutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-decoration-style: none;
    text-decoration:none;
`;

export const ShortCutLink = styled(Link)`
    display: flex;
    flex-direction: column;
  `;