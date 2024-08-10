import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  table: [],
  reservations: [],
};

export const TableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addTable: (state, action) => {
      state.table = [...state.table, action.payload];
    },
    deleteTable: (state, action) => {
      state.table = state.table.filter(
        (reservation) => reservation.id !== action.payload
      );
    },
    updateTableInfo: (state, action) => {
      state.table = state.table.map((reservation) =>
        reservation.id === action.payload.id ? action.payload : reservation
      );
    },
    saveTable: (state) => {
      localStorage.setItem("newTable", JSON.stringify(state.table));
    },
    loadTable: (state) => {
      const storedTable = JSON.parse(localStorage.getItem("newTable")) || [];
      state.table = storedTable;
    },
    setReservations: (state, action) => {
      state.table = action.payload;
    },
  },
});

export const {
  addTable,
  saveTable,
  loadTable,
  deleteTable,
  updateTableInfo,
  setReservations,
} = TableSlice.actions;

export default TableSlice.reducer;
