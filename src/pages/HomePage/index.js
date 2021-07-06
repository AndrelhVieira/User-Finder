import { HomePageContainer, HomePageCover } from "./styles";
import Button from "components/Button";

import Logo from "assets/cover.svg";

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
          <img src={Logo} alt="Logo do User Finder" />
          <div>
            <h1>Welcome to User Finder</h1>
            <p>
              Here you will find the main information about any github account
            </p>
            <Button action={goToSearch}>Search an account</Button>
          </div>
        </HomePageCover>
      </HomePageContainer>
    </>
  );
};

export default HomePage;
