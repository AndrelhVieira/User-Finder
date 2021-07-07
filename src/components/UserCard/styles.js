import styled from "styled-components";
import { COLORS } from "styles/colors";

export const CardDiv = styled.div`
  border: 3px solid ${COLORS.darkBlue};
  margin: 15px;
  max-width: 696px;
  display: flex;
  flex-direction: column;

  & img {
    max-width: 296px;
    width: 90%;
    margin: auto;
    border-radius: 50%;
    border: 5px solid ${COLORS.darkBlue};
  }

  & section {
    display: flex;
    justify-content: space-around;
    max-width: 396px;
    margin: 10px auto;
    width: 100%;
  }

  & a {
    margin: 10px;
  }

  & button {
    width: 100%;
  }

  @media screen and (min-width: 696px) {
    margin: 15px auto;
  }
`;

export const ReposCards = styled.div`
  margin: 10px auto;
  padding: 10px;
  width: 100%;
  max-width: 296px;
  border: 3px solid ${COLORS.darkBlue};
  background-color: ${COLORS.darkBlue};

  & a {
    margin: 10px auto;
  }

  & button {
    width: 100%;
    font-family: "DM Sans", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    padding: 15px;
    font-size: 1rem;
    letter-spacing: 1px;
    border: 3px solid ${COLORS.darkBlue};
    outline: none;
    cursor: pointer;
    background-color: ${({ isDark }) =>
      isDark ? COLORS.darkBlue : COLORS.middleBlue};
    color: ${COLORS.white};
  }

  & h3,
  p {
    margin: 10px 0;
  }
`;

export const ReposDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 296px;
  overflow-y: scroll;
`;