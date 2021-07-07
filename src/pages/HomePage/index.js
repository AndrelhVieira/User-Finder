import { HomePageContainer, HomePageCover } from "./styles";
import Button from "components/Button";

import Cover from "assets/cover.svg";
import Logo from "assets/CompleteLogoUserFinder.svg";

import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();

  const goToSearch = () => {
    history.push("/search");
  };

  return (
    <>
      <HomePageContainer>
        <HomePageCover>
          <img src={Cover} alt="User Finder Cover" />
          <div>
            <img src={Logo} alt="User Finder Logo" />
            <h1>Welcome to User Finder</h1>
            <p>
              Here you will find the main information about any github account
            </p>
            <Button action={goToSearch} isDark={false}>
              Search an account
            </Button>
          </div>
        </HomePageCover>
      </HomePageContainer>
    </>
  );
};

export default HomePage;
