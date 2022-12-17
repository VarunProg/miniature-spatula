import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { RecipeRecord } from '../../services/recipesService';

interface IRecipesInitialState {
    list: RecipeRecord[];
    selectedRecipes: string[];
}
// Define the initial state using that type
const initialState:IRecipesInitialState = {
  list: [],
  selectedRecipes: [],
}

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    loadRecipes: (state, action: PayloadAction<any>) => {
      state.list = [ ...action.payload.recipes ]
    },
    setSelectedRecipes: (state, action: PayloadAction<string[]>) => {
      state.selectedRecipes = [ ...action.payload ]
    }
  },
})

export const { setSelectedRecipes, loadRecipes } = recipesSlice.actions

export const getRecipes = (state: RootState) => state.recipes

export default recipesSlice.reducer