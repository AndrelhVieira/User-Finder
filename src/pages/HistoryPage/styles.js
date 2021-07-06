import styled from "styled-components";
import { COLORS } from "styles/colors";

export const HistoryPageContainer = styled.section`
  color: ${COLORS.white};
  text-align: center;
`;

export const EmptyHistoryDiv = styled.div`
  & img {
    width: 100vw;
    max-width: 396px;
  }
`;
