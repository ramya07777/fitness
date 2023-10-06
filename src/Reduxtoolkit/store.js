// store.js
import { configureStore } from '@reduxjs/toolkit';
import exerciseReducer from './exerciseSlice';

const store = configureStore({
  reducer: {
    exercise: exerciseReducer, // Add the exercise reducer
  },
});

export default store;
