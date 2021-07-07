import { HistoryPageContainer, EmptyHistoryDiv, HistoryCard } from "./styles";
import Menu from "components/Menu";
import Button from "components/Button";

import emptyImage from "assets/emptyImage.svg";

import { useContext } from "react";
import { UsersHistoryInfosContext } from "providers/UsersHistoryInfos";
import { CurrentUserInfosContext } from "providers/CurrentUserInfos";
import { goToSomewhere } from "services/functionalities";
import { useHistory } from "react-router";

const HistoryPage = () => {
  const history = useHistory();

  const { allUsersSearched } = useContext(UsersHistoryInfosContext);
  const { setCurrentUser } = useContext(CurrentUserInfosContext);

  localStorage.setItem("Searches", JSON.stringify(allUsersSearched));

  const usersStorage = JSON.parse(localStorage.getItem("Searches")) || "";

  usersStorage.sort(function (a, b) {
    return a.exactMoment > b.exactMoment
      ? -1
      : b.exactMoment > a.exactMoment
      ? 1
      : 0;
  });

  const backToSearch = (search) => {
    setCurrentUser(search);

    goToSomewhere(history, "/search");
  };

  return (
    <>
      <HistoryPageContainer>
        <Menu />
        <h1>History</h1>
        {JSON.stringify(usersStorage) !== JSON.stringify([]) ? (
          usersStorage.map((search, index) => (
            <HistoryCard key={index}>
              <img src={search.avatar_url} alt="User avatar" />
              <div>
                <h3>{search.name}</h3>
                <p>
                  Searched in <br />
                  <strong>{search.exactMoment}</strong>
                </p>
                <p>
                  <em>{search.momentsAgo}</em>
                </p>
                <Button action={() => backToSearch(search)}>
                  <i class="fas fa-search"></i>
                  Search again
                </Button>
              </div>
            </HistoryCard>
          ))
        ) : (
          <EmptyHistoryDiv>
            <img src={emptyImage} alt="An pic that says the history is empty" />
            <p>
              There's nothing here yet. <br /> We're waiting for your searches!!
            </p>
          </EmptyHistoryDiv>
        )}
      </HistoryPageContainer>
    </>
  );
};

export default HistoryPage;
