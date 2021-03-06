import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { menuItems } from "services/menuItems";
import { DivDrawerStyled, ListStyled } from "./styles";

import { useHistory } from "react-router-dom";
import { goToSomewhere } from "services/functionalities";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const MenuDrawer = () => {
  const history = useHistory();

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListStyled>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => goToSomewhere(history, item.linkTo)}
          >
            <ListItemIcon>{item.itemIcon}</ListItemIcon>
            {item.itemName}
            <ListItemText />
          </ListItem>
        ))}
      </ListStyled>
    </div>
  );

  return (
    <DivDrawerStyled>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </DivDrawerStyled>
  );
};

export default MenuDrawer;
