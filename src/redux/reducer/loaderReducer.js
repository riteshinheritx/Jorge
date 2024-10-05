import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    loaderTrue: (state) => {
      state.loader = true;
    },
    loaderFalse: (state) => {
      state.loader = false;
    },
  },
});

export const { loaderTrue, loaderFalse } = loaderSlice.actions;

export default loaderSlice.reducer;
