import styled from "styled-components";
import { COLORS } from "styles/globalStyle";

export const MenuStyled = styled.section`
  background-color: ${COLORS.primaryColor};
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
    cursor: pointer;
  }
`;

export const DesktopMenuItems = styled.div`
  display: none;
  width: 100%;
  justify-content: space-evenly;
  max-width: 396px;

  & button {
    font-family: "DM Sans", sans-serif;
    color: ${COLORS.light};
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
    background-color: ${COLORS.secondaryColor};
  }

  @media screen and (min-width: 696px) {
    display: flex;
  }
`;
