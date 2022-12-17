import classNameNames from 'classnames';
import React, { FC } from 'react';
import { RecipeRecord } from '../../services/recipesService';
import classes from './RecipeList.module.scss';
import { Recipe } from './Recipe';
import { setSelectedRecipes } from '../../redux/slices/recipesSlice';
import { useAppDispatch } from '../../hooks';
import classnames from 'classnames';
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../../utils/constants';
import { Button } from '../../components';
import { setOrderStage } from '../../redux/slices/globalSlice';
import { RecipeSkeleton } from './RecipeSkeleton';

interface RecipeListProps {
  loading: boolean;
  list: RecipeRecord[];
  selectedRecipes: string[];
}

export const RecipeList: FC<RecipeListProps> = ({ list, selectedRecipes, loading }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onRecipeSelect = (actionType: string, id: string) => {
    let selectedRecipesData = [...selectedRecipes];
    let selectedIdx = selectedRecipesData.findIndex(item => item === id);
    if (actionType === 'add') {
      selectedRecipesData.push(id);
    } else {
      selectedRecipesData.splice(selectedIdx, 1);
    }
    dispatch(setSelectedRecipes(selectedRecipesData))
  }

  const onCheckout = () => {
    navigate(ROUTES.USERDETAILS);
    dispatch(setOrderStage(1));
  }

  return (
  <div className={classes.recipesContainer}>
    <div className={classes.checkoutContainer}>
      <label className={classes.infoTxt}>
        {selectedRecipes.length === 0 ? 
          'Please select atleast 2 recipes to continue.'
          : `${selectedRecipes.length} Recipes Selected`
        }
      </label>
      <Button 
        name="Continue"
        disabled={selectedRecipes.length < 2}
        testId="continue"
        onClick={onCheckout}
      />
    </div>
    <div className={classes.recipeListWrapper}>
      <div className={classes.recipeListContainer}>
        {loading ? Array(4).fill(1).map(item => <RecipeSkeleton />)
        : list.map(recipe => <Recipe key={`recipe_${recipe.id}`} recipe={recipe} selectedRecipes={selectedRecipes} onSelect={onRecipeSelect} />)}
      </div>
    </div>
  </div>);
}
