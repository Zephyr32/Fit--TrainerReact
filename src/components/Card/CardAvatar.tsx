import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import useStyles from "../../assets/jss/material-dashboard-react/components/cardAvatarStyle";

export interface CardAvatarPropsTypes {
  children: ReactNode;
  className?: string;
  profile?: boolean;
  plain?: boolean;
}

export const CardAvatar: FC<CardAvatarPropsTypes> = (
  props: CardAvatarPropsTypes
) => {
  const s = useStyles();
  const { children, className, plain, profile, ...rest } = props;
  const cardAvatarClasses = classNames({
    [s.cardAvatar]: true,
    [s.cardAvatarProfile]: profile,
    [s.cardAvatarPlain]: plain,
  });
  className &&
    cardAvatarClasses.concat(" " + classNames({ [className]: className }));
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
};
