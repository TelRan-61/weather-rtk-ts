import {api_key, base_url} from "../../utils/constants.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {WeatherInfo, WeatherInfoResponse} from "../../utils/types";

// TODO Homework 3 Propose ideas: How refetch weather info after user defined timeout
export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    // TODO Homework 2 learn refetchOnMountOrArgChange
    // refetchOnMountOrArgChange:
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo,string>({
            query: city => `?q=${city}&appid=${api_key}&units=metric`,
            // TODO Homework 1 learn keepUnusedDataFor
            // keepUnusedDataFor:
            transformResponse: (data: WeatherInfoResponse) => ({
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                country: data.sys.country,
                sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString()
            })
        })
    }),
})

export const {useGetWeatherByCityQuery} = weatherApi;