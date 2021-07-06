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
  background-color: ${COLORS.middleBlue};
  color: ${COLORS.white};
`;
