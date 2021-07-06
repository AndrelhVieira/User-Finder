import styled from "styled-components";
import { COLORS } from "styles/colors";

export const DivDrawerStyled = styled.div`
  & button {
    color: ${COLORS.white};
    font-size: 2.5rem;
  }

  @media screen and (min-width: 696px) {
    display: none;
  }
`;
