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

export const HistoryCard = styled.div`
  background-color: ${COLORS.darkBlue};
  max-width: 396px;
  margin: 10px auto;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & img {
    width: 30%;
    border-radius: 50%;
    border: 5px solid ${COLORS.middleBlue};
  }
`;
