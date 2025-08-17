import {api_key, base_url} from "../../utils/constants.ts";
import {setWeather} from "../weather/weatherSlice.ts";
import {setMessage} from "../message/messageSlice.ts";
import type {AppDispatch} from "../../app/store.ts";

export const fetchWeather = (city: string) => {
    return (dispatch: AppDispatch) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                dispatch(setWeather({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: (new Date(data.sys.sunset * 1000)).toLocaleTimeString()
                }));
                dispatch(setMessage(''));
            })
            .catch(e => {
                console.log(e)
                dispatch(setMessage('Enter correct city name'));
            })
    }
}