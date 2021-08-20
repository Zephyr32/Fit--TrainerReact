import React, { FC } from "react";
import useStyles from "../../assets/jss/material-dashboard-react/components/typographyStyle";

export const Muted: FC = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.mutedText}>
      {children}
    </div>
  );
};
