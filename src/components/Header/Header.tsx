import classNames from "classnames";
import React, { FC } from "react";
import classes from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={classes.header}>
      <label className={classes.logoName}>{"miniature spatuala"}</label>
    </header>
  );
};
