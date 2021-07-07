import { useHistory } from "react-router-dom";
import { goToSomewhere } from "services/functionalities";
import { menuItems } from "services/menuItems";

import { MenuStyled, DesktopMenuItems } from "./styles";
import MenuDrawer from "components/MenuDrawer";

import Logo from "assets/CompleteLogoUserFinder.svg";

const Menu = () => {
  const history = useHistory();

  return (
    <MenuStyled>
      <img
        src={Logo}
        alt="User Finder logo"
        onClick={() => goToSomewhere(history, "/")}
      />
      <MenuDrawer />
      <DesktopMenuItems>
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => goToSomewhere(history, item.linkTo)}
          >
            {item.itemIcon}
            {item.itemName}
          </button>
        ))}
      </DesktopMenuItems>
    </MenuStyled>
  );
};

export default Menu;
