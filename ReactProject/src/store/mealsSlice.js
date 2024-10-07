import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const firebaseUrl = "https://swasthproject-default-rtdb.firebaseio.com/";

// Thunk to load meals from Firebase
export const loadMeals = createAsyncThunk(
  'meals/loadMeals',
  async (email) => {
    const response = await axios.get(`${firebaseUrl}users/${email}/meals.json`);
    const mealsArray = response.data
      ? Object.keys(response.data).map(key => ({
          id: key,
          ...response.data[key],
        }))
      : [];
    return mealsArray;
  }
);

// Thunk to add a meal to Firebase
export const addMeal = createAsyncThunk(
  'meals/addMeal',
  async ({ email, meal }) => {
    const response = await axios.post(`${firebaseUrl}users/${email}/meals.json`, meal);
    return { id: response.data.name, ...meal }; // Return meal with Firebase ID
  }
);

// Thunk to edit a meal in Firebase
export const editMeal = createAsyncThunk(
  'meals/editMeal',
  async ({ email, meal }) => {
    await axios.patch(`${firebaseUrl}users/${email}/meals/${meal.id}.json`, meal);
    return meal; // Return updated meal
  }
);

// Thunk to remove a meal from Firebase
export const removeMeal = createAsyncThunk(
  'meals/removeMeal',
  async ({ email, mealId }) => {
    await axios.delete(`${firebaseUrl}users/${email}/meals/${mealId}.json`);
    return mealId; // Return the ID of the removed meal
  }
);

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    mealList: [],
    dailyCalories: 0,
    searchResults: [],
  },
  reducers: {
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMeals.fulfilled, (state, action) => {
        state.mealList = action.payload;
        state.dailyCalories = state.mealList.reduce((acc, meal) => acc + meal.calories, 0);
      })
      .addCase(addMeal.fulfilled, (state, action) => {
        state.mealList.push(action.payload);
        state.dailyCalories += action.payload.calories;
      })
      .addCase(editMeal.fulfilled, (state, action) => {
        const updatedMeal = action.payload;
        const mealIndex = state.mealList.findIndex(meal => meal.id === updatedMeal.id);
        if (mealIndex >= 0) {
          state.dailyCalories -= state.mealList[mealIndex].calories; // Remove old calories
          state.mealList[mealIndex] = updatedMeal; // Update meal
          state.dailyCalories += updatedMeal.calories; // Add new calories
        }
      })
      .addCase(removeMeal.fulfilled, (state, action) => {
        const mealId = action.payload;
        const mealIndex = state.mealList.findIndex(meal => meal.id === mealId);
        if (mealIndex >= 0) {
          state.dailyCalories -= state.mealList[mealIndex].calories; // Remove calories
          state.mealList.splice(mealIndex, 1); // Remove meal
        }
      });
  },
});

export const { setSearchResults } = mealsSlice.actions;

export default mealsSlice.reducer;
