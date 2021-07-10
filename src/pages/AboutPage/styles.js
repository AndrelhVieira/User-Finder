import styled from "styled-components";
import { COLORS } from "styles/colors";

export const AboutPageContainer = styled.section`
  height: 100vh;
  background-color: ${COLORS.middleBlue};
  color: ${COLORS.white};
  text-align: center;

  & p {
    text-align: justify;
    margin: 15px;
    max-width: 696px;
    font-size: 1.25rem;
  }

  @media screen and (min-width: 696px) {
    & p {
      margin: 15px auto;
    }
  }
`;

export const HowItWorksDiv = styled.div`
  & img {
    overflow: scroll;
    max-width: 696px;
    margin: auto;
    border: 5px solid ${COLORS.darkBlue};
    display: none;
  }

  & strong {
    cursor: pointer;
  }

  @media screen and (min-width: 725px) {
    & img {
      display: block;
    }
  }
`;
