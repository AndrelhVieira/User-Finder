import { MenuStyled, DesktopMenuItems } from "./styles";
import MenuDrawer from "components/MenuDrawer";

import Logo from "assets/CompleteLogoUserFinder.svg";
import { menuItems } from "services/menuItems";

import { useHistory } from "react-router-dom";
import { goToSomewhere } from "services/functionalities";

const Menu = () => {
  const history = useHistory();

  return (
    <MenuStyled>
      <img src={Logo} alt="User Finder logo" />
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
