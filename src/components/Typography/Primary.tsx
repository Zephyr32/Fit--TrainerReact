import React, { FC } from "react";
import useStyles from "../../assets/jss/material-dashboard-react/components/typographyStyle";

export const Primary: FC = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.primaryText}>
      {children}
    </div>
  );
};
