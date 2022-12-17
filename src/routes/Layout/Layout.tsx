import React, { FC } from 'react';
import classes from './Layout.module.scss';
import { Header, Footer, ProgressBar } from './../../components';
import { useAppSelector } from '../../hooks';
import { getOrderStage } from '../../redux/slices/globalSlice';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout:FC<LayoutProps> = ({ children }) => {
  const orderStage = useAppSelector(getOrderStage);
  return (
    <>
      <Header />
      <div className={classes.mainContainer} data-testid="content">
        <ProgressBar orderStage={orderStage} />
        <div className={classes.content}>{children}</div>
      </div>
      <Footer />
    </>
  );
}