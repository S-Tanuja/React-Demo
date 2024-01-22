import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  toDoList: [],
};

export const updateString = createSlice({
  name: "updatestring",
  initialState,
  reducers: {
    valueUpdate: (state, action) => {
      state.toDoList = action.payload;
    },
    valueDelete: (state, action) => {
      const newArray = [...state.toDoList];
      newArray.splice(action.payload, 1);
      state.toDoList = newArray;
    },
    valueEdit: (state, action) => {
      console.log(action.payload);
      let newArray = [...state.toDoList];
      newArray[action.payload.index] = {
        ...newArray[action.payload.index],
        ...action.payload,
      };
      state.toDoList = newArray;
    },
    // valueAdd: (state, action) => {
    //   const newArray = [...state.toDoList];
    //   newArray.push(action.payload)
    //   state.toDoList = newArray;
    // }
  },
});

// Action creators are generated for each case reducer function
export const { valueUpdate, valueDelete, valueEdit, valueAdd } = updateString.actions;

export default updateString;
