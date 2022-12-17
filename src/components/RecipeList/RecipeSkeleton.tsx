import { FC } from "react";
import classes from "./RecipeList.module.scss";
import classnames from "classnames";

export const RecipeSkeleton: FC = () => {
  return (
    <div className={classnames(classes.recipe, classes.isLoading)}>
      <div className={classes.image}></div>
      <div className={classes.recipeDetails}>
        <div className={classes.mealType}></div>
        <h2 className={classes.recipeTitle}></h2>
        <ul className={classes.recipeAttributesLabels}></ul>
      </div>
      <div className={classes.buttonSection}></div>
    </div>
  );
};
