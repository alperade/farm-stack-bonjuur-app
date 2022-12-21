import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { accountSlice } from './accountSlice';
import { apiSlice } from "./accountApi";
import { memberSlice } from "./memberSlice";
import { memberApi } from "./memberApi";
import { waitlistApi } from "./waitlistApi";

export const store = configureStore({
  reducer: {
    [accountSlice.name]: accountSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [memberSlice.name]: memberSlice.reducer,
    [memberApi.reducerPath]: memberApi.reducer,
    [waitlistApi.reducerPath]: waitlistApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(memberApi.middleware)
      .concat(waitlistApi.middleware);
  },
});

setupListeners(store.dispatch);
