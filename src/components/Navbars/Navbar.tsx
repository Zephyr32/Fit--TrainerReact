import React, { FC } from "react";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/icons/Menu";
import { AdminNavbarLinks } from "./AdminNavbarLinks";
import { RegularButton } from "../CustomButtons/Button";

import { useRouteName } from "../../hooks/useRouteName";

import useStyles from "../../assets/jss/material-dashboard-react/components/headerStyle";
export type HeaderColor = "primary" | "info" | "success" | "warning" | "danger";
export interface HeaderPropsTypes {
  color?: HeaderColor;
  rtlActive?: boolean;
  handleDrawerToggle?: (...args: any[]) => any;
  routes?: Array<any>;
  [key: string]: any;
}

export const Header: FC<HeaderPropsTypes> = (props) => {
  const classes = useStyles();
  const routeName = useRouteName();
  const { color } = props;

  let appBarClasses = undefined;

  color &&
    (appBarClasses = classNames({
      [" " + classes[color]]: color,
    }));
  return (
    <AppBar className={classes.appBar + " " + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <RegularButton
            regularColor="transparent"
            href="#"
            className={classes.title}
          >
            {routeName}
          </RegularButton>
        </div>
        <Hidden smDown implementation="css">
          {<AdminNavbarLinks />}
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
