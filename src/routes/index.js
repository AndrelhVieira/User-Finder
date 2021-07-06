import { Switch, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import SearchPage from "pages/SearchPage";
import HistoryPage from "pages/HistoryPage";
import AboutPage from "pages/AboutPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/history" component={HistoryPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </>
  );
};

export default Routes;
