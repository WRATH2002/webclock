import { configureStore } from "@reduxjs/toolkit";
import timeSlice from "./timeSlice";

const store = configureStore({
  reducer: {
    time: timeSlice,
  },
});

export default store;
