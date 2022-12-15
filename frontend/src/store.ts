import { quoteApi } from "./services/quotes";
import { configureStore } from "@reduxjs/toolkit";
import { departureApi } from "./services/departures";
import { transportationApi } from "./services/transportations";

export const store = configureStore({
  reducer: {
    [departureApi.reducerPath]: departureApi.reducer,
    [transportationApi.reducerPath]: transportationApi.reducer,
    [quoteApi.reducerPath]: quoteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      departureApi.middleware,
      transportationApi.middleware,
      quoteApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
