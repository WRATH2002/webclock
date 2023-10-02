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
    fiterinfo: (state, action) => {
      const id = action.payload;
      state.alarmInfo = state.alarmInfo.filter(
        (item) => item.indexid !== id.fid
      );
      // const filtered = people.filter((item) => item.id !== idToRemove);
    },
  },
});

export const { addTimeFlag, clearTimeFlag, addAlarmInfo, fiterinfo } =
  timeSlice.actions;

export default timeSlice.reducer;
