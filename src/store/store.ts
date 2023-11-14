import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import { bookstoreApi } from "./apis/bookstore.api";

const rootReducer = combineReducers({
  [bookstoreApi.reducerPath]: bookstoreApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookstoreApi.middleware),
});

setupListeners(store.dispatch);

export default store;
