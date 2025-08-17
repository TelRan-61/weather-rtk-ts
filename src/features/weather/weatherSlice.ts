import {createSlice} from "@reduxjs/toolkit";
import type {WeatherInfo} from "../../utils/types";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherInfo,
    reducers: {
        setWeather: (_state, action) => action.payload,
    }
})

export const {setWeather} = weatherSlice.actions;
export default weatherSlice.reducer;