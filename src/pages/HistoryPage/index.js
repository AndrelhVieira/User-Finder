import { useContext, useState } from "react";
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
import ConfirmationModal from "components/ConfirmationModal";

import emptyImage from "assets/emptyImage.svg";
import { notify } from "react-notify-toast";
import Footer from "components/Footer";

const HistoryPage = () => {
  const history = useHistory();

  const { allUsersSearched, removeUserSearch } = useContext(
    UsersHistoryInfosContext
  );
  const { setCurrentUser } = useContext(CurrentUserInfosContext);

  const [usersList, setUsersList] = useState(allUsersSearched);

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

  const removeSearch = (search) => {
    const searchToDelete = usersList.find(
      (item) => item.exactMoment === search.exactMoment
    );
    const allUsersUpdated = usersList.filter((item) => item !== searchToDelete);

    setUsersList(allUsersUpdated);
    removeUserSearch(allUsersUpdated);
    notify.show("Search Deleted", "success", 2500);
  };

  const removeAllSearches = () => {
    setUsersList([]);
    removeUserSearch([]);
    notify.show("Clean History", "success", 2500);
  };

  return (
    <>
      <HistoryPageContainer>
        <Menu />
        <h1>History</h1>
        {JSON.stringify(usersList) !== JSON.stringify([]) && (
          <ConfirmationModal deleteAll action={removeAllSearches} />
        )}
        {JSON.stringify(usersList) !== JSON.stringify([]) ? (
          usersList.map((search, index) => (
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
                <ConfirmationModal search={search} action={removeSearch} />
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
        <Footer />
      </HistoryPageContainer>
    </>
  );
};

export default HistoryPage;
