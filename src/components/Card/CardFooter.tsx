import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import useStyles from "../../assets/jss/material-dashboard-react/components/cardFooterStyle";

export interface CardFooterPropsTypes {
  className?: string;
  plain?: boolean;
  profile?: boolean;
  stats?: boolean;
  chart?: boolean;
  children?: ReactNode;
}

export const CardFooter: FC<CardFooterPropsTypes> = (props) => {
  const s = useStyles();
  const { className, children, plain, profile, stats, chart, ...rest } = props;
  let cardFooterClasses = classNames({
    [s.cardFooter]: true,
    [s.cardFooterPlain]: plain,
    [s.cardFooterProfile]: profile,
    [s.cardFooterStats]: stats,
    [s.cardFooterChart]: chart,
  });
  if (className)
    cardFooterClasses = cardFooterClasses.concat(
      " " + classNames({ [className]: className })
    );
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
};
