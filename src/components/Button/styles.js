import styled from "styled-components";
import { COLORS } from "styles/globalStyle";

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
    isDark ? COLORS.primaryColor : COLORS.secondaryColor};
  color: ${COLORS.light};
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
    background-color: ${COLORS.light};
    width: 0;
    transition: 0.3s;
    height: 100%;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    box-shadow: 2px 2px 50px 5px
      ${({ isDark }) => (isDark ? COLORS.primaryColor : COLORS.secondaryColor)};
    color: ${COLORS.light};
    color: ${COLORS.primaryColor};
  }

  & a:link {
    text-decoration: none;
    color: ${COLORS.light};
  }

  & i {
    margin-right: 5px;
  }
`;
