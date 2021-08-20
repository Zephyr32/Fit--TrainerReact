import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import useStyles from "../../assets/jss/material-dashboard-react/components/cardIconStyle";
import { ColorType, getCardHeaderClassName } from "./CardHeader";

export interface CardIconPropsTypes {
  className?: string;
  color?: ColorType;
  children?: ReactNode;
  [key: string]: any;
}

export const CardIcon: FC<CardIconPropsTypes> = (props: CardIconPropsTypes) => {
  const s = useStyles();
  const { className, children, color, ...rest } = props;
  let cardHeaderColor = undefined;
  if (color) cardHeaderColor = getCardHeaderClassName(color);
  let cardIconClasses = classNames({
    [s.cardIcon]: true,
  });
  if (color && cardHeaderColor)
    cardIconClasses = cardIconClasses.concat(
      " " + classNames({ [s[cardHeaderColor]]: color })
    );
  className &&
    (cardIconClasses = cardIconClasses.concat(
      " " + classNames({ [className]: className })
    ));
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
};
