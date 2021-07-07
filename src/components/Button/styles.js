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
  transition: 0.25s;
  position: relative;
  z-index: 1;
  display: block;
  margin: auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: ${COLORS.white};
    width: 0;
    transition: 0.3s;
    height: 100%;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    box-shadow: 2px 2px 50px 5px
      ${({ isDark }) => (isDark ? COLORS.darkBlue : COLORS.middleBlue)};
    color: ${COLORS.white};
    color: ${COLORS.darkBlue};
  }

  & a:link {
    text-decoration: none;
    color: ${COLORS.white};
  }

  & i {
    margin-right: 5px;
  }
`;
