import Routes from "routes";
import Notifications from "react-notify-toast";
import { GlobalStyle } from "styles/globalStyle";

const App = () => {
  return (
    <>
      <Notifications />
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
