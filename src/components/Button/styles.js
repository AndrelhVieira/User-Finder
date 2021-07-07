import styled from "styled-components";
import { COLORS } from "styles/colors";

export const ButtonStyled = styled.button`
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px;
  font-size: 1rem;
  letter-spacing: 1px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ isDark }) =>
    isDark ? COLORS.darkBlue : COLORS.middleBlue};
  color: ${COLORS.white};

  & a {
    text-decoration: none;
    color: ${COLORS.white};
  }

  & i {
    margin-right: 5px;
  }
`;
