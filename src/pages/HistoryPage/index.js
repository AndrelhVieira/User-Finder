import { HistoryPageContainer, EmptyHistoryDiv } from "./styles";

import Menu from "components/Menu";

import emptyImage from "assets/emptyImage.svg";

const HistoryPage = () => {
  return (
    <>
      <HistoryPageContainer>
        <Menu />
        <h1>History</h1>
        <EmptyHistoryDiv>
          <img src={emptyImage} alt="An pic that says the history is empty" />
          <p>
            There's nothing here yet. <br /> We're waiting for your searches!!
          </p>
        </EmptyHistoryDiv>
      </HistoryPageContainer>
    </>
  );
};

export default HistoryPage;
