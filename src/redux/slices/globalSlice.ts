import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface IGlobalInitialState {
  error: Error | null;
  orderStage: number;
}
const initialState:IGlobalInitialState = {
  error: null,
  orderStage: 0
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<Error | null>) => {
      state.error = action.payload
    },
    setOrderStage: (state, action: PayloadAction<number>) => {
      state.orderStage = action.payload
    },
  },
})

export const { setError, setOrderStage } = globalSlice.actions

export const getError = (state: RootState) => state.global.error
export const getOrderStage = (state: RootState) => state.global.orderStage

export default globalSlice.reducer