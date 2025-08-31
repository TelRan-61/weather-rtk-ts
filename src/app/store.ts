import {configureStore} from "@reduxjs/toolkit";
import city from "../features/city/citySlice";
import {weatherApi} from "../features/api/weatherApi.ts";

export const store = configureStore({
    reducer: {
        city,
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(weatherApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch