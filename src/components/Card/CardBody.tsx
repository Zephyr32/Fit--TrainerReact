import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import useStyles from "../../assets/jss/material-dashboard-react/components/cardBodyStyle";

export interface CardBodyPropsTypes {
  className?: string;
  plain?: boolean;
  profile?: boolean;
  children?: ReactNode;
}

export const CardBody: FC<CardBodyPropsTypes> = (props: CardBodyPropsTypes) => {
  const s = useStyles();
  const { className, children, plain, profile, ...rest } = props;
  let cardBodyClasses = classNames({
    [s.cardBody]: true,
    [s.cardBodyPlain]: plain,
    [s.cardBodyProfile]: profile,
  });
  if (className)
    cardBodyClasses = cardBodyClasses.concat(
      " " + classNames({ [className]: className })
    );
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
};
