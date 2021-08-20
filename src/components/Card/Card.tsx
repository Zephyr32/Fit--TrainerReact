import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import useStyles from "../../assets/jss/material-dashboard-react/components/cardStyle";

export interface CardPropsTypes {
  className?: string;
  plain?: boolean;
  profile?: boolean;
  chart?: boolean;
  children: ReactNode;
}

export const Card: FC<CardPropsTypes> = (props: CardPropsTypes) => {
  const s = useStyles();
  const { className, children, plain, profile, chart, ...rest } = props;
  let cardClasses = classNames({
    [s.card]: true,
    [s.cardPlain]: plain,
    [s.cardProfile]: profile,
    [s.cardChart]: chart,
  });
  className &&
    (cardClasses = cardClasses.concat(
      " " + classNames({ [className]: className })
    ));

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};
