import "styles/global.css";
import Routes from "routes";
import Notifications from "react-notify-toast";

const App = () => {
  return (
    <>
      <Notifications />
      <Routes />
    </>
  );
};

export default App;
