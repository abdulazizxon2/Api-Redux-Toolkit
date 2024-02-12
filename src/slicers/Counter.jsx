import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: {
    data: [],
  },
  reducers: {
    handlePush: (state, { payload }) => {
      state.data.push(payload);
    },
  },
});

export const { handlePush } = counter.actions;
export default counter.reducer;
