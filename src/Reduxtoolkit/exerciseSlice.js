// exerciseSlice.js
import { createSlice } from '@reduxjs/toolkit';

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: null, // Initial state is null
  reducers: {
    setSelectedExercise: (state, action) => {
      // Set the selected exercise based on the action payload
      return action.payload;
    },
    },
});

export const { setSelectedExercise } = exerciseSlice.actions;

export default exerciseSlice.reducer;
