import { createSlice } from "@reduxjs/toolkit";

export const infoUsersSlice = createSlice({
  name: "infoUsers",
  initialState: {
    info: [],
  },
  reducers: {
    info: (state, action) => {
      state.info = action.payload;
    },
  },
});
