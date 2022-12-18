import { configureStore } from "@reduxjs/toolkit";
import { infoUsersSlice } from "../features/infoUsersSlice";

export const store = configureStore({
  reducer: {
    infoUsers: infoUsersSlice.reducer,
  },
});
