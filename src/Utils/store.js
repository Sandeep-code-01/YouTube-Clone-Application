import { configureStore } from "@reduxjs/toolkit";
// import appReducer from "./appSlice";
import appslice from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appslice,
    search: searchSlice,
  },
});

export default store;
