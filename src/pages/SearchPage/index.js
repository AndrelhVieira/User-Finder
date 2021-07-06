import { SearchPageContainer, FormContainer } from "./styles";

import Menu from "components/Menu";
import Button from "components/Button";

const SearchPage = () => {
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
          />
          <Button action={() => alert("asdasd")} isDark>
            retrieve username
          </Button>
        </FormContainer>
      </SearchPageContainer>
    </>
  );
};

export default SearchPage;
