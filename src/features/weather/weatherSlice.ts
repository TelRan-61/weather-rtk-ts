import {createSlice} from "@reduxjs/toolkit";
import type {WeatherInfo} from "../../utils/types";
import {fetchWeather} from "../api/weatherActions.ts";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherInfo,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
    }
})

export default weatherSlice.reducer;