import {api_key, base_url} from "../../utils/constants.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
    'fetch/weather',
    async (city: string) => {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        if (!response.ok) {
            throw new Error('Enter correct city name');
        }
        const data = await response.json();
        return {
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: (new Date(data.sys.sunset * 1000)).toLocaleTimeString()
        }
    }
)