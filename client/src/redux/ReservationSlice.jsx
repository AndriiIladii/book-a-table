import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservations: [],
};

export const ReservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    deleteReservation: (state, action) => {
      state.reservations = state.reservations.filter(
        (reservation) => reservation._id !== action.payload
      );
    },
    updateReservationInfo: (state, action) => {
      state.reservations = state.reservations.map((reservation) =>
        reservation.id === action.payload.id ? action.payload : reservation
      );
    },
    saveReservation: (state) => {
      localStorage.setItem(
        "newreservation",
        JSON.stringify(state.reservations)
      );
    },

    setReservation: (state, action) => {
      state.reservations = action.payload;
    },
  },
});

export const {
  saveReservation,
  deleteReservation,
  updateReservationInfo,
  setReservation,
} = ReservationSlice.actions;

export default ReservationSlice.reducer;
