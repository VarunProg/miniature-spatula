import React, { FC } from 'react';
import classes from './ProgressBar.module.scss';
import classnames from 'classnames';

interface ProgressBarProps {
  orderStage: number | 0;
}

export const ProgressBar:FC<ProgressBarProps> = ({ orderStage }) => {

  return (
    <div className={classes.stepperWrapper}>
      <div className={classnames(classes.stepperItem, {[classes.completed]: orderStage > 0}, {[classes.active]: orderStage == 0})}>
        <div className={classes.stepCounter}>1</div>
        <div className={classes.stepName}>Choose recipes</div>
      </div>
      <div className={classnames(classes.stepperItem, {[classes.completed]: orderStage > 1}, {[classes.active]: orderStage == 1})}>
        <div className={classes.stepCounter}>2</div>
        <div className={classes.stepName}>Enter your details</div>
      </div>
      <div className={classnames(classes.stepperItem, {[classes.completed]: orderStage == 2}, {[classes.active]: orderStage == 2})}>
        <div className={classes.stepCounter}>3</div>
        <div className={classes.stepName}>Order status</div>
      </div>
    </div>
  );
};
