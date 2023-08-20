import { HTMLAttributes, PropsWithChildren, memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Card.module.scss";

// This is more like a Box, rather than a Card
// TODO: rename to Box, make a real card

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card = memo((props: PropsWithChildren<CardProps>) => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
});
