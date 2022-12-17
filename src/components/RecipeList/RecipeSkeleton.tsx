import classNameNames from "classnames";
import React, { FC } from "react";
import { RecipeRecord } from "../../services/recipesService";
import classes from "./RecipeList.module.scss";
import classnames from "classnames";
import MinusIcon from "../../assets/minus.svg";
import PlusIcon from "../../assets/plus.svg";
import { Button } from "..";

export const RecipeSkeleton: FC = () => {
  return (
    <div className={classnames(classes.recipe, classes.isLoading)}>
      <div className={classes.image}></div>
      <div className={classes.recipeDetails}>
        <div className={classes.mealType}></div>
        <h2 className={classes.recipeTitle}></h2>
        <ul className={classes.recipeAttributesLabels}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={classes.buttonSection}>
        <div></div>
      </div>
    </div>
  );
};
