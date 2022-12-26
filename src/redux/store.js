import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { acticlesSlice } from "../features/acticlesSlice";
import { commentsSlice } from "../features/commentsSlice";
import { infoUsersSlice } from "../features/infoUsersSlice";

const reducer = combineReducers({
  infoUsers: infoUsersSlice.reducer,
  acticles: acticlesSlice.reducer,
  comments: commentsSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["comments"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
