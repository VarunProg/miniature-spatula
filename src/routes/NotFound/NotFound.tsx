import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { setOrderStage } from "../../redux/slices/globalSlice";
import { useAppDispatch } from "../../hooks";
import { ROUTES } from "../../utils/constants";
import classes from "./NotFound.module.scss";
import { setSelectedRecipes } from "../../redux/slices/recipesSlice";

export const NotFound: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goBackToHome = () => {
    navigate(ROUTES.HOME);
    dispatch(setOrderStage(0));
    dispatch(setSelectedRecipes([]));
  };

  return (
    <div className={classes.notFoundSection}>
      <h3>{"Nothing to see here!"}</h3>
      <img
        className={classes.notFoundImg}
        src="https://marleyspoon.de/assets/ms/errors/not_found-cee2382f6c89b19ce629c3188076b8af.jpg"
      />
      <div className={classes.formActions}>
        <Button name="Back To Home" testId="continue" onClick={goBackToHome} />
      </div>
    </div>
  );
};
