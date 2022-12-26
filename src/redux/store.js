import { configureStore } from "@reduxjs/toolkit";
import { acticlesSlice } from "../features/acticlesSlice";
import { commentsSlice } from "../features/commentsSlice";
import { infoUsersSlice } from "../features/infoUsersSlice";

export const store = configureStore({
  reducer: {
    infoUsers: infoUsersSlice.reducer,
    acticles: acticlesSlice.reducer,
    comments: commentsSlice.reducer,
  },
});
