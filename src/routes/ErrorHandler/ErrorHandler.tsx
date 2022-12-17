import React, { FC } from 'react';
import classes from './ErrorHandler.module.scss';
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../../utils/constants';
import { Player } from '@lottiefiles/react-lottie-player';
import errorAlert from '../../assets/errorAlert.json';
import { Button } from '../../components';
import { setError, setOrderStage } from '../../redux/slices/globalSlice';
import { useAppDispatch } from '../../hooks';
import { setSelectedRecipes } from '../../redux/slices/recipesSlice';

export const ErrorHandler:FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goBackToHome = () => {
    navigate(ROUTES.HOME);
    dispatch(setOrderStage(0));
    dispatch(setError(null));
    dispatch(setSelectedRecipes([]))
  }

  return (
    <div className={classes.confirmContainer}>
      <div className={classes.errorSection}>
        <h3>{'Some error occurred'}</h3>
        <Player
          autoplay
          loop
          src={errorAlert}
          style={{ height: '300px', width: '300px' }}
        >
        </Player>
        <h4>{'Please contact support at support@ms.com'}</h4>
        <p>{'Thank you for your patience!'}</p>
        <div className={classes.formActions}>
          <Button 
            name="Back To Home"
            testId="continue"
            onClick={goBackToHome}
          />
        </div>
      </div>
    </div>);
}