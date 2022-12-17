import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import classes from './Home.module.scss';
import { RecipeList } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setError } from '../../redux/slices/globalSlice';
import { loadRecipes, getRecipes } from '../../redux/slices/recipesSlice';
import { fetchRecipes } from '../../services/recipesService';

export const Home:FC = () => {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(getRecipes);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(fetchRecipes)
      .then(resp => {
        dispatch(loadRecipes(resp));
        setLoading(false);
      })
      .catch(e => dispatch(setError(e)));
  }, []);

  return <RecipeList {...recipes} loading={loading} />;
}