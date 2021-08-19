import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import Snack from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import useStyles from "../../assets/jss/material-dashboard-react/components/snackbarContentStyle";

export type SnackbarColor =
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "primary";
export type SnackbarPlace = "tl" | "tr" | "tc" | "br" | "bl" | "bc";
export interface SnackbarPropsTypes {
  message: ReactNode;
  color?: SnackbarColor;
  close?: boolean;
  icon?: any;
  place?: SnackbarPlace;
  open?: boolean;
  closeNotification: () => any;
}

export const Snackbar: FC<SnackbarPropsTypes> = (props) => {
  const classes = useStyles();
  const { message, color, close, icon, place, open } = props;
  let action = null;
  const messageClasses = classNames({
    [classes.iconMessage]: icon !== undefined,
  });
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={() => props.closeNotification()}
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  return (
    <Snack
      anchorOrigin={
        place && {
          vertical: place.indexOf("t") === -1 ? "bottom" : "top",
          horizontal:
            place.indexOf("l") !== -1
              ? "left"
              : place.indexOf("c") !== -1
              ? "center"
              : "right",
        }
      }
      open={open}
      message={
        <div>
          {icon !== undefined ? <props.icon className={classes.icon} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      action={action}
      ContentProps={{
        classes: {
          root: classes.root + " " + (color && classes[color]),
          message: classes.message,
        },
      }}
    />
  );
};
