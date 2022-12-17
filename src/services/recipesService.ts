import axios from 'axios';

interface CategoryRecord {
  displayText: string;
  __typename: string;
}

interface ImageRecord {
  url: string;
  __typename: string;
}

interface RecipeAttributeRecord {
  key: string;
  __typename: string;
}

export interface RecipeRecord {
  key?: string;
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  mealType: string;
  recipeType: string;
  category: CategoryRecord;
  image: ImageRecord;
  attributes: RecipeAttributeRecord[];
  extraFees?: [];
  __typename: string;
}

export interface RecipesResponse {
  recipes: RecipeRecord[];
}

export const fetchRecipes = (): Promise<RecipesResponse> =>
  axios.get('https://code-challenge-mid.vercel.app/api/recipes', {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  }).then(res => res.data);