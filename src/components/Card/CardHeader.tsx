import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import useStyles from "../../assets/jss/material-dashboard-react/components/cardHeaderStyle";

export type ColorType =
  | "warning"
  | "success"
  | "danger"
  | "info"
  | "primary"
  | "rose";

export interface CardHeaderPropsTypes {
  className?: string;
  color?: ColorType;
  plain?: boolean;
  stats?: boolean;
  icon?: boolean;
  children?: ReactNode;
}

export type CardHeaderNames =
  | "warningCardHeader"
  | "successCardHeader"
  | "dangerCardHeader"
  | "infoCardHeader"
  | "primaryCardHeader"
  | "roseCardHeader";

export const getCardHeaderClassName = (v: ColorType): CardHeaderNames => {
  return `${v}CardHeader` as CardHeaderNames;
};

export const CardHeader: FC<CardHeaderPropsTypes> = (
  props: CardHeaderPropsTypes
) => {
  const s = useStyles();
  const { className, children, color, plain, stats, icon, ...rest } = props;
  let colorHeader = undefined;
  if (color) {
    colorHeader = getCardHeaderClassName(color);
  }

  const cardHeaderClasses = classNames({
    [s.cardHeader]: true,
    [s.cardHeaderPlain]: plain,
    [s.cardHeaderStats]: stats,
    [s.cardHeaderIcon]: icon,
  });

  if (color && colorHeader) {
    cardHeaderClasses.concat(" " + classNames({ [s[colorHeader]]: color }));
  }
  if (className) {
    cardHeaderClasses.concat(" " + classNames({ [className]: className }));
  }
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
};
