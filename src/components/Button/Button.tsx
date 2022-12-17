import React, { FC, PropsWithChildren } from 'react';
import classes from './Button.module.scss';
import classnames from 'classnames';

export interface ButtonProps {
  name: string;
  disabled?: boolean;
  testId?: string;
  onClick: () => void;
  className?: string;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  name,
  className,
  disabled = false,
  testId,
  onClick,
  children,
}) => {
  return (
    <button 
      type="button" 
      className={classnames(classes.button, className && classes[className])} 
      disabled={disabled}
      onClick={onClick}
      data-testid={testId}>
      {children ? children :  <span>{name}</span>}
    </button>
  );
};
