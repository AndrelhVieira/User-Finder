import styled from "styled-components";
import { COLORS } from "styles/colors";

export const HomePageContainer = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${COLORS.darkBlue};
  color: ${COLORS.white};
  @media screen and (min-width: 696px) {
    flex-direction: row;
  }
`;

export const HomePageCover = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 396px;

  & img {
    display: block;
    margin: 10px auto;
    width: 75%;
    max-width: 296px;
  }

  & div {
    text-align: center;
    font-size: 1rem;
    margin: auto;
  }

  @media screen and (min-width: 696px) {
    flex-direction: row;
    max-width: 696px;
  }
`;
