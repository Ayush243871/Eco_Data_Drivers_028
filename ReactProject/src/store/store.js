// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import mealsReducer from './mealsSlice';
import nutritionReducer from './nutritionSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    meals: mealsReducer,
    nutrition: nutritionReducer,
    
  },
});

export default store;
