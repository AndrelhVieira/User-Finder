import { CurrentUserInfosProvider } from "./CurrentUserInfos";
import { UsersHistoryInfosProvider } from "./UsersHistoryInfos";

const Providers = ({ children }) => {
  return (
    <UsersHistoryInfosProvider>
      <CurrentUserInfosProvider>{children}</CurrentUserInfosProvider>
    </UsersHistoryInfosProvider>
  );
};

export default Providers;
