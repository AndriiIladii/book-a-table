import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  table: [],
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
    saveTable: (state) => {
      localStorage.setItem("newTable", JSON.stringify(state.table));
    },
    loadTable: (state) => {
      const storedTable = JSON.parse(localStorage.getItem("newTable")) || [];
      state.table = storedTable;
    },
  },
});

export const { addTable, saveTable, loadTable, deleteTable } =
  TableSlice.actions;

export default TableSlice.reducer;
