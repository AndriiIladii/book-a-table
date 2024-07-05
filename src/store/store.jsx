import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./TableSlice";

const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});

export default store;
