import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  table: [],
};

export const TableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
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

    setTable: (state, action) => {
      state.table = action.payload;
    },
  },
});

export const { saveTable, deleteTable, updateTableInfo, setTable } =
  TableSlice.actions;

export default TableSlice.reducer;
