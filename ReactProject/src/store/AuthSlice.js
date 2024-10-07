// store/AuthSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false, // Default to false
  },
  reducers: {
    setAuthenticated(state) {
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true'); // Persist in localStorage
    },
    clearAuthenticated(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('isAuthenticated'); // Remove from localStorage on logout
    },
  },
});

export const { setAuthenticated, clearAuthenticated } = authSlice.actions;
export default authSlice.reducer;
