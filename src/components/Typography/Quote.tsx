import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import useStyles from "../../assets/jss/material-dashboard-react/components/typographyStyle";

export interface QuotePropsTypes {
  text?: ReactNode;
  author?: ReactNode;
}

export const Quote: FC<QuotePropsTypes> = (props) => {
  const classes = useStyles();
  const { text, author } = props;
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
};

Quote.propTypes = {
  text: PropTypes.node,
  author: PropTypes.node,
};
