import React, { FC, ReactNode } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import Button, { ButtonProps } from "@material-ui/core/Button";

import useStyles from "../../assets/jss/material-dashboard-react/components/buttonStyle";
import { ColorType } from "../Card/CardHeader";

type buttonColorType = "white" | "transparent" | ColorType;

export interface RegularButtonPropsTypes extends ButtonProps {
  regularColor?: buttonColorType;
  regularSize?: "sm" | "lg";
  simple?: boolean;
  round?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  className?: string;
  muiClasses?: any;
  children?: ReactNode;
  [key: string]: any;
}

export const RegularButton: FC<RegularButtonPropsTypes> = (props) => {
  const s = useStyles();
  const {
    regularColor,
    round,
    children,
    disabled,
    simple,
    regularSize,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props;
  const btnClasses = classNames({
    [s.button]: true,
    [s.round]: round,
    [s.disabled]: disabled,
    [s.simple]: simple,
    [s.block]: block,
    [s.link]: link,
    [s.justIcon]: justIcon,
  });
  regularSize &&
    btnClasses.concat(" " + classNames({ [s[regularSize]]: regularSize }));
  regularColor &&
    btnClasses.concat(" " + classNames({ [s[regularColor]]: regularColor }));
  className && btnClasses.concat(" " + classNames({ [className]: className }));

  return (
    <Button {...rest} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>
  );
};
