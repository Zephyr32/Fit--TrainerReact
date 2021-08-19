import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import useStyles from "../../assets/jss/material-dashboard-react/components/snackbarContentStyle";

export interface SnackbarContentPropsTypes {
  message: ReactNode;
  color?: "info" | "success" | "warning" | "danger" | "primary";
  close?: boolean;
  icon?: any;
}
export const SnackbarContent: FC<SnackbarContentPropsTypes> = (props) => {
  const classes = useStyles();
  const { message, color, close, icon } = props;
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
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  return (
    <Snack
      message={
        <div>
          {icon !== undefined ? <props.icon className={classes.icon} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      classes={{
        root: classes.root + " " + (color && classes[color]),
        message: classes.message,
      }}
      action={action}
    />
  );
};
