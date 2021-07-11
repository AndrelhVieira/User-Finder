import styled from "styled-components";
import { COLORS } from "styles/globalStyle";

import List from "@material-ui/core/List";

export const DivDrawerStyled = styled.div`
  & button {
    color: ${COLORS.light};
    font-size: 2.5rem;
  }

  @media screen and (min-width: 696px) {
    display: none;
  }
`;

export const ListStyled = styled(List)`
  background-color: ${COLORS.primaryColor};
  color: ${COLORS.light};

  & i {
    color: ${COLORS.light};
  }
`;
