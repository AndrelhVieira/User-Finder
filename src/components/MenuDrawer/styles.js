import styled from "styled-components";
import { COLORS } from "styles/colors";

import List from "@material-ui/core/List";

export const DivDrawerStyled = styled.div`
  & button {
    color: ${COLORS.white};
    font-size: 2.5rem;
  }

  @media screen and (min-width: 696px) {
    display: none;
  }
`;

export const ListStyled = styled(List)`
  background-color: ${COLORS.darkBlue};
  color: ${COLORS.white};

  & i {
    color: ${COLORS.white};
  }
`;
