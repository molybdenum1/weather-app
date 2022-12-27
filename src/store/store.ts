import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./weather/weather.api";
import { weaterReducer } from "./weather/weather.slice";

export const store = configureStore({
  reducer: {
    cities: weaterReducer,

    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
