import styled from "styled-components";
import { COLORS } from "styles/colors";

export const MenuStyled = styled.section`
  background-color: ${COLORS.darkBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;

  & img {
    width: 50%;
    margin: 10px;
    max-width: 296px;
  }
`;

export const DesktopMenuItems = styled.div`
  display: none;
  width: 100%;
  justify-content: space-evenly;
  max-width: 396px;

  & button {
    font-family: "DM Sans", sans-serif;
    color: ${COLORS.white};
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 15px;
    font-size: 1.25rem;
    transition: 0.25s;

    & i {
      margin-right: 5px;
    }
  }

  & :hover {
    background-color: ${COLORS.middleBlue};
  }

  @media screen and (min-width: 696px) {
    display: flex;
  }
`;
