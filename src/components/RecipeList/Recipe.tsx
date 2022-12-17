import classNameNames from 'classnames';
import React, { FC } from 'react';
import { RecipeRecord } from '../../services/recipesService';
import classes from './RecipeList.module.scss';
import classnames from 'classnames';
import MinusIcon from '../../assets/minus.svg';
import PlusIcon from '../../assets/plus.svg';
import { Button } from '../../components';

interface RecipeProps {
  recipe: RecipeRecord,
  selectedRecipes: string[];
  onSelect: (type: string, id: string) => void;
};

export const Recipe: FC<RecipeProps> = ({
  recipe,
  selectedRecipes,
  onSelect,
}) => {
  const selectedRecipeCount = selectedRecipes.reduce((acc: number, val: string) => {
    if (val === recipe.id) acc++;
    return acc;
  }, 0);

  const addRecipe = (id: string) => {
    onSelect('add', id);
  }

  const removeRecipe = (id: string) => {
    onSelect('remove', id);
  }

  const replaceMinus = (attrKey : string) => {
    return attrKey.replaceAll('_', ' ');
  }

  return (
    <div className={classes.recipe}>
      <img 
          alt={`${recipe.title} ${recipe.subtitle}`}
          className={classes.recipeImage}
          data-src={recipe.image.url} 
          src={recipe.image.url} />
      <div className={classes.recipeDetails}>
        <div className={classes.mealType}>
          {recipe.mealType}
        </div>
        <h2 className={classes.recipeTitle}>
          {recipe.title}
        </h2>
        <ul className={classes.recipeAttributesLabels}>
          {recipe.attributes.map(attr => 
            <li key={`${recipe.id}_${attr.key}`}>
              <a href='#'>{replaceMinus(attr.key)}</a>
            </li>
          )}
        </ul>
      </div>
      <div className={classes.buttonSection}>
        {selectedRecipeCount > 0 ?
        (<Button 
          name="Remove"
          className="removeBtn"
          testId="remove-recipe"
          onClick={() => removeRecipe(recipe.id)}
        >
          <a className={classes.minusIcon}>
            <img src={MinusIcon} alt="Remove Recipe"/>
          </a> 
          <span>{`Remove`}</span>
        </Button>)
        :(<Button 
          name="Add"
          className="addBtn"
          testId="add-recipe"
          onClick={() => addRecipe(recipe.id)}
        >
          <a className={classes.plusIcon}>
            <img src={PlusIcon} alt="Add Recipe"/>
          </a> 
          <span>{`Add`}</span>
        </Button>)}
      </div>
    </div>
  );
};
