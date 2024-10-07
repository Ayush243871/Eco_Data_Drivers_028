import { createSlice } from "@reduxjs/toolkit";

// Initial state for the nutrition slice
const initialState = {
  totalCalories: 0,
  targetProtein: 0,
  targetCalories: 2000, // Default value for target calories
  targetSugar: 0,
  remainingProtein: 0, // Add remaining nutrients
  remainingCalories: 0,
  remainingSugar: 0,
  remainingCarbs: 0, // Add remaining carbs
};

const nutritionSlice = createSlice({
  name: "nutrition",
  initialState,
  reducers: {
    // setTotalCalories(state, action) {
    //   state.totalCalories = action.payload;
    // },
    setTargetValues(state, action) {
      state.targetProtein = action.payload.protein;
      state.targetCalories = action.payload.calories || 2000; // Use provided or default
      state.targetSugar = action.payload.sugar;
    },
    setRemainingNutrients(state, action) {
      const {
        remainingProtein,
        remainingCalories,
        remainingSugar,
        totalCalories,
      } = action.payload;
      state.remainingProtein = remainingProtein;
      state.remainingCalories = remainingCalories;
      state.remainingSugar = remainingSugar;
      state.totalCalories = totalCalories;
    },
  },
});

// Export actions
export const {
  setTotalCalories,
  setTargetValues,
  setRemainingNutrients,
} = nutritionSlice.actions;

// Selectors
export const selectTotalCalories = (state) => state.nutrition.totalCalories;
export const selectTargetCalories = (state) => state.nutrition.targetCalories;
export const selectTargetProtein = (state) => state.nutrition.targetProtein;
export const selectRemainingCalories = (state) =>
  state.nutrition.remainingCalories;
export const selectRemainingProtein = (state) =>
  state.nutrition.remainingProtein;
export const selectRemainingSugar = (state) => state.nutrition.remainingSugar;
export const selectRemainingCarbs = (state) => state.nutrition.remainingCarbs;

// Export reducer
export default nutritionSlice.reducer;
