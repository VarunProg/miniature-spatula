import React, { FC } from "react";
import classes from "./OrderConfirmation.module.scss";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { Player } from "@lottiefiles/react-lottie-player";
import orderConfirmCheckMark from "../../assets/orderConfirmCheckMark.json";
import { Button } from "../../components";
import { setOrderStage } from "../../redux/slices/globalSlice";
import { useAppDispatch } from "../../hooks";
import { setSelectedRecipes } from "../../redux/slices/recipesSlice";

export const OrderConfirmation: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goBackToHome = () => {
    navigate(ROUTES.HOME);
    dispatch(setOrderStage(0));
    dispatch(setSelectedRecipes([]));
  };

  return (
    <div className={classes.confirmSection}>
      <h3>{"Your order has been confirmed"}</h3>
      <Player
        autoplay
        loop
        src={orderConfirmCheckMark}
        style={{ height: "200px", width: "200px" }}
      ></Player>
      <h4>{"Thank you for your purchase"}</h4>
      <p>{"Your order id is #xxx"}</p>
      <div className={classes.formActions}>
        <Button name="Back To Home" testId="continue" onClick={goBackToHome} />
      </div>
    </div>
  );
};
