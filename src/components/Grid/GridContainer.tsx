import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid, { GridProps } from "@material-ui/core/Grid";

const styles = {
  grid: {
    margin: "0 -15px !important",
    width: "unset",
  },
};

const useStyles = makeStyles(styles);

export const GridContainer: FC<GridProps> = (props) => {
  const s = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid container {...rest} className={s.grid}>
      {children}
    </Grid>
  );
};
