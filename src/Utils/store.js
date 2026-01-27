import { configureStore } from "@reduxjs/toolkit";
// import appReducer from "./appSlice";
import appslice from "./appSlice";

const store = configureStore({
  reducer: {
    app: appslice,
  },
});

export default store;
