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
  margin: 20px 5px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px 1px 10px black;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 396px) {
    margin: 20px auto;
  }

  & img {
    width: 30%;
    border-radius: 50%;
    border: 5px solid ${COLORS.middleBlue};
    display: none;

    @media screen and (min-width: 396px) {
      display: block;
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  & button {
    align-items: center;
    margin: 5px;

    & i {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 396px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const UserInfosDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 496px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
