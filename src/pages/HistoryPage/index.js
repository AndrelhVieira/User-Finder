import { useContext } from "react";
import { UsersHistoryInfosContext } from "providers/UsersHistoryInfos";
import { CurrentUserInfosContext } from "providers/CurrentUserInfos";
import { useHistory } from "react-router";
import { goToSomewhere } from "services/functionalities";

import {
  HistoryPageContainer,
  EmptyHistoryDiv,
  HistoryCard,
  ButtonDiv,
  UserInfosDiv,
} from "./styles";
import Menu from "components/Menu";
import Button from "components/Button";

import emptyImage from "assets/emptyImage.svg";

const HistoryPage = () => {
  const history = useHistory();

  const { allUsersSearched } = useContext(UsersHistoryInfosContext);
  const { setCurrentUser } = useContext(CurrentUserInfosContext);

  allUsersSearched.sort(function (item, nextItem) {
    return item.exactMoment > nextItem.exactMoment
      ? -1
      : nextItem.exactMoment > item.exactMoment
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
        {JSON.stringify(allUsersSearched) !== JSON.stringify([]) ? (
          allUsersSearched.map((search, index) => (
            <HistoryCard key={index}>
              <UserInfosDiv>
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
                </div>
              </UserInfosDiv>
              <ButtonDiv>
                <Button action={() => backToSearch(search)}>
                  <i className="fas fa-search"></i>
                  Search again
                </Button>
                <Button>
                  <i className="far fa-trash-alt"></i>
                  Remove item
                </Button>
              </ButtonDiv>
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
