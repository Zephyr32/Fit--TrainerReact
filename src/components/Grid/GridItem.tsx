import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid, { GridProps } from "@material-ui/core/Grid";

const styles = {
  grid: {
    padding: "0 15px !important",
  },
};
export interface GridItem extends GridProps {}

const useStyles = makeStyles(styles);

export const GridItem: FC<GridItem> = (props) => {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};
