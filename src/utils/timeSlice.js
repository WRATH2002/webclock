import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "time",
  initialState: {
    timeFlag: [],
    alarmInfo: [],
  },
  reducers: {
    addTimeFlag: (state, action) => {
      state.timeFlag.push(action.payload);
      console.log(state.timeFlag);
    },
    clearTimeFlag: (state) => {
      state.timeFlag = [];
    },
    addAlarmInfo: (state, action) => {
      state.alarmInfo.push(action.payload);
      console.log(state.alarmInfo);
    },
  },
});

export const { addTimeFlag, clearTimeFlag, addAlarmInfo } = timeSlice.actions;

export default timeSlice.reducer;
