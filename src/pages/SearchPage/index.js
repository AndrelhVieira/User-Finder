import { useState } from "react";

import { SearchPageContainer, FormContainer } from "./styles";
import Menu from "components/Menu";
import Button from "components/Button";
import UserCard from "components/UserCard";

import api from "services/api";
import moment from "moment";

import { useContext } from "react";
import { CurrentUserInfosContext } from "providers/CurrentUserInfos";
import { UsersHistoryInfosContext } from "providers/UsersHistoryInfos";

const SearchPage = () => {
  const [user, setUser] = useState("");
  const [showCard, setShowCard] = useState(false);
  const { currentUser, setCurrentUser } = useContext(CurrentUserInfosContext);
  const { addUserSearch } = useContext(UsersHistoryInfosContext);

  const getMoment = () => {
    const exactMoment = moment().format("MMMM Do YYYY, h:mm a");
    const momentsAgo = moment().startOf(exactMoment).fromNow();

    return {
      exactMoment: exactMoment,
      momentsAgo: momentsAgo,
    };
  };

  const retrieveUser = async () => {
    const { exactMoment, momentsAgo } = getMoment();

    await api.get(`/users/${user}`).then((response) => {
      response.data.exactMoment = exactMoment;
      response.data.momentsAgo = momentsAgo;

      setCurrentUser(response.data);
      addUserSearch(response.data);
    });
    setShowCard(true);
  };

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <>
      <SearchPageContainer>
        <Menu />
        <h1>Search</h1>
        <FormContainer>
          <input
            name="username"
            for="username"
            id="username"
            placeholder="Github Username"
            autoComplete="off"
            value={user}
            onChange={(event) => handleChange(event)}
          />
          <Button action={retrieveUser} isDark>
            retrieve username
          </Button>
        </FormContainer>
        {showCard && <UserCard user={currentUser} />}
      </SearchPageContainer>
    </>
  );
};

export default SearchPage;
