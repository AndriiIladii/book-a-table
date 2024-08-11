import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./ReservationSlice";

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
  },
});

export default store;
