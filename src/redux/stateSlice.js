import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const stateSlice = createSlice({
  name: "covidData",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      console.log(payload);
      state.data = payload;
    },
  },
});

export const { setData } = stateSlice.actions;

export default stateSlice.reducer;
