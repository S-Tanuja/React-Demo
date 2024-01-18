import { createSlice } from '@reduxjs/toolkit';

const initialState= {
  value: '',
  
};

export const updateString = createSlice({
  name: 'updatestring',
  initialState,
  reducers: {
    valueUpdate: (state, action) => {
      state.value = action.payload;
    },
   
  },
});

// Action creators are generated for each case reducer function
export const {
  valueUpdate,
} = updateString.actions;

export default updateString;