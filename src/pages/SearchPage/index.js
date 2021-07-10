import { useState, useContext } from "react";
import { CurrentUserInfosContext } from "providers/CurrentUserInfos";
import { UsersHistoryInfosContext } from "providers/UsersHistoryInfos";
import { notify } from "react-notify-toast";
import api from "services/api";
import moment from "moment";

import { SearchPageContainer, FormContainer } from "./styles";
import Menu from "components/Menu";
import Button from "components/Button";
import UserCard from "components/UserCard";
import Loading from "components/Loading";
import Footer from "components/Footer";

const SearchPage = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, setCurrentUser } = useContext(CurrentUserInfosContext);
  const { addUserSearch } = useContext(UsersHistoryInfosContext);

  const getMoment = () => {
    const exactMoment = moment().format("MMMM Do YYYY, h:mm:ss a");
    const momentsAgo = moment().startOf(exactMoment).fromNow();

    return {
      exactMoment: exactMoment,
      momentsAgo: momentsAgo,
    };
  };

  const retrieveUser = async () => {
    setLoading(true);

    const { exactMoment, momentsAgo } = getMoment();

    await api
      .get(`/users/${user}`)
      .then((response) => {
        response.data.exactMoment = exactMoment;
        response.data.momentsAgo = momentsAgo;

        setCurrentUser(response.data);
        addUserSearch(response.data);

        notify.show("User Found", "success", 2500);
      })
      .catch((erro) => {
        notify.show("User not Found!", "error", 2500);
      });

    setLoading(false);
  };

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <>
      <SearchPageContainer>
        <Menu />
        <FormContainer>
          <h1>Search</h1>
          <input
            name="username"
            htmlFor="username"
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
        {loading && <Loading loading={loading} />}
        {JSON.stringify(currentUser) !== JSON.stringify({}) && (
          <UserCard user={currentUser} />
        )}
        <Footer />
      </SearchPageContainer>
    </>
  );
};

export default SearchPage;
