import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  table: [],
};

export const TableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addTable: (state) => {},
  },
});

export default TableSlice.reducer;
