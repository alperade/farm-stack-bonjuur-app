import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { itineraryApi } from "./itineraryApi";
import { eventApi } from "./eventApi";
import { yelpApi } from "./yelpApi";
import { searchSlice } from "./searchSlice";
import { accountSlice } from './accountSlice';
import { itinerarySlice } from "./itinerarySlice";
import { apiSlice } from "./accountApi";

export const store = configureStore({
  reducer: {
    [searchSlice.name]: searchSlice.reducer,
    [itineraryApi.reducerPath]: itineraryApi.reducer,
    [itinerarySlice.name]: itinerarySlice.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [yelpApi.reducerPath]: yelpApi.reducer,
    [accountSlice.name]: accountSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(itineraryApi.middleware)
      .concat(yelpApi.middleware)
      .concat(eventApi.middleware)
      .concat(apiSlice.middleware);
  },
});

setupListeners(store.dispatch);
