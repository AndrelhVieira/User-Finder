import { AboutPageContainer, HowItWorksDiv } from "./styles";
import Menu from "components/Menu";

import printSearchPage from "assets/printSearchPage.png";
import printHistoryPage from "assets/printHistoryPage.png";
import printSearchPageResult from "assets/printSearchPageResult.png";
import Footer from "components/Footer";

const AboutPage = () => {
  return (
    <>
      <AboutPageContainer>
        <Menu />
        <h1>About</h1>

        <p>
          The main purpose of this application is to streamline access to the
          account of friends, employees or even yours, easily providing the path
          to the main Github projects for that user. You can also see what your
          latest searches were through your search history.
        </p>

        <HowItWorksDiv>
          <h3>How it works</h3>
          <p>
            1. On the search page you will find a field to enter the username
            (Attention: only the username) and a button to do the search.
          </p>
          <img
            src={printSearchPage}
            alt="Search page print for demonstration"
          />
          <p>
            2. As soon as you click the button, a record of your search is
            visible in your search history and you can repeat it.
          </p>
          <img
            src={printHistoryPage}
            alt="History page print for demonstration"
          />
          <p>
            3. Your search will return the main information and repositories
            about that user, thus facilitating, the access to the projects of
            that account.
          </p>
          <img
            src={printSearchPageResult}
            alt="Search page results print for demonstration"
          />
        </HowItWorksDiv>
        <Footer />
      </AboutPageContainer>
    </>
  );
};

export default AboutPage;
