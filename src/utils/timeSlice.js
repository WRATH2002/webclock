import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "time",
  initialState: {
    timeFlag: [],
  },
  reducers: {
    addTimeFlag: (state, action) => {
      state.timeFlag.push(action.payload);
      console.log(state.timeFlag);
    },
    clearTimeFlag: (state) => {
      state.timeFlag = [];
    },
  },
});

export const { addTimeFlag, clearTimeFlag } = timeSlice.actions;

export default timeSlice.reducer;
